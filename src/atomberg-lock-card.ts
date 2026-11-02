import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';
import { AtombergLockCardConfig } from './types';
import { cardStyles } from './styles';

const customCardEntry = {
  type: 'atomberg-lock-card',
  name: 'Atomberg Smart Lock Card',
  description: 'A custom Lovelace card for Atomberg smart locks with local BLE control, battery monitoring, and activity audit logs.',
  preview: true,
  domain: 'lock',
  domains: ['lock'],
  documentationURL: 'https://github.com/selvakk2k/atomberg-lock-card',
};

(window as any).customCards = (window as any).customCards || [];
const existingCardIdx = (window as any).customCards.findIndex(
  (c: any) => c.type === 'atomberg-lock-card' || c.type === 'custom:atomberg-lock-card'
);
if (existingCardIdx >= 0) {
  (window as any).customCards[existingCardIdx] = customCardEntry;
} else {
  (window as any).customCards.push(customCardEntry);
}

@customElement('atomberg-lock-card')
export class AtombergLockCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: AtombergLockCardConfig;
  @state() private _isSyncing: boolean = false;
  @state() private _toastMessage: string = '';
  @state() private _showToast: boolean = false;
  @state() private _currentView: 'main' | 'history' = 'main';
  @state() private _expanded: boolean = false;
  @state() private _prevLockState: string | null = null;
  @state() private _localUnlockHistory: any[] | null = null;

  static get styles() {
    return cardStyles;
  }

  protected updated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(changedProperties);
    if (this._config?.theme === 'material_you') {
      this.setAttribute('theme', 'material_you');
    } else {
      this.removeAttribute('theme');
    }

    const entityId = this._getEntityId();
    if (entityId && this.hass?.states[entityId]) {
      const currentState = this.hass.states[entityId].state;
      if (this._prevLockState !== null && this._prevLockState !== currentState) {
        if (currentState === 'locked') {
          this._triggerToast('Door locked');
        } else if (currentState === 'unlocked') {
          this._triggerToast('Door unlocked');
        }
      }
      this._prevLockState = currentState;
    }
  }

  private _haptic(type: 'selection' | 'light' | 'medium' | 'heavy' | 'success' | 'warning' | 'failure' = 'selection'): void {
    const event = new CustomEvent('haptic', {
      detail: type,
      bubbles: true,
      composed: true,
    });
    window.dispatchEvent(event);
  }

  private _isCompact(): boolean {
    return (this._config?.layout || this._config?.card_layout) === 'compact';
  }

  public getCardSize(): number {
    return this._isCompact() && !this._expanded ? 2 : 5;
  }

  static getConfigForm() {
    return {
      schema: [
        {
          name: 'entity',
          label: 'Lock Entity (Auto-Discovered if blank)',
          selector: { entity: { domain: 'lock' } },
        },
        { name: 'name', label: 'Custom Title', selector: { text: {} } },
        {
          name: 'theme',
          label: 'Theme',
          selector: {
            select: {
              options: [
                { label: 'Default HA Theme', value: 'default' },
                { label: 'Material You (Optimized for Material 3 Theme)', value: 'material_you' },
              ],
            },
          },
        },
        {
          name: 'layout',
          label: 'Card Layout',
          selector: {
            select: {
              options: [
                { label: 'Default (Full)', value: 'default' },
                { label: 'Compact (Expandable)', value: 'compact' },
              ],
            },
          },
        },
        {
          name: 'full_layout',
          label: 'Full View Style',
          selector: {
            select: {
              options: [
                { label: 'Classic', value: 'default' },
                { label: 'Google Home', value: 'google_home' },
              ],
            },
          },
        },
        {
          name: '',
          type: 'expandable',
          title: 'Theming & Colors',
          icon: 'mdi:palette',
          schema: [
            { name: 'accent_color', label: 'Accent Color Override', selector: { ui_color: {} } },
            { name: 'main_color', label: 'Background Color Override', selector: { ui_color: {} } },
          ],
        },
        {
          name: '',
          type: 'expandable',
          title: 'Companion Sensors (Auto-Discovered if blank)',
          icon: 'mdi:link-variant',
          schema: [
            {
              name: 'battery_sensor',
              label: 'Battery Sensor',
              selector: { entity: { domain: 'sensor', device_class: 'battery' } },
            },
            {
              name: 'last_user_sensor',
              label: 'Last User Sensor',
              selector: { entity: { domain: 'sensor' } },
            },
            {
              name: 'last_event_sensor',
              label: 'Last Event Sensor',
              selector: { entity: { domain: 'sensor' } },
            },
          ],
        },
        {
          name: 'confirm_unlock',
          label: 'Require Confirmation to Unlock',
          selector: { boolean: {} },
        },
      ],
    };
  }

  static getStubConfig(hass?: HomeAssistant, entities?: string[], entitiesFallback?: string[]) {
    let lockEntity = '';
    if (entities && entities.length) {
      lockEntity = entities.find((e) => e.startsWith('lock.')) || '';
    }
    if (!lockEntity && entitiesFallback && entitiesFallback.length) {
      lockEntity = entitiesFallback.find((e) => e.startsWith('lock.')) || '';
    }
    if (!lockEntity && hass && hass.states) {
      const lockKeys = Object.keys(hass.states).filter((e) => e.startsWith('lock.'));
      lockEntity = lockKeys.find((e) => e.includes('atomberg') || e.includes('sl1')) || lockKeys[0] || '';
    }
    return { type: 'custom:atomberg-lock-card', entity: lockEntity };
  }

  public setConfig(config: AtombergLockCardConfig): void {
    if (!config) throw new Error('Invalid configuration');
    this._config = {
      card_layout: 'default',
      show_history: true,
      ...config,
    };
  }

  private _getEntityId(): string {
    if (this._config?.entity) return this._config.entity;
    if (this.hass?.states) {
      const keys = Object.keys(this.hass.states).filter((e) => e.startsWith('lock.'));
      return keys.find((e) => e.includes('atomberg') || e.includes('sl1') || e.includes('smart_lock')) || keys[0] || '';
    }
    return '';
  }

  private _getSecondaryEntityId(prefix: string, fallbackKeywords: string[]): string {
    const primary = this._getEntityId();
    if (!primary || !this.hass?.states) return '';
    const baseName = primary.replace('lock.', '');

    for (const kw of fallbackKeywords) {
      const candidate = `sensor.${baseName}_${kw}`;
      if (this.hass.states[candidate]) return candidate;
    }

    const sensorKeys = Object.keys(this.hass.states).filter((e) => e.startsWith('sensor.'));
    for (const kw of fallbackKeywords) {
      const found = sensorKeys.find((k) => k.includes(baseName) && k.includes(kw));
      if (found) return found;
    }

    return '';
  }

  private _triggerToast(msg: string): void {
    this._toastMessage = msg;
    this._showToast = true;
    setTimeout(() => {
      this._showToast = false;
    }, 2800);
  }

  private async _toggleLock(): Promise<void> {
    const entityId = this._getEntityId();
    if (!entityId || !this.hass) return;

    const stateObj = this.hass.states[entityId];
    const isLocked = stateObj ? stateObj.state === 'locked' : true;

    if (isLocked && this._config.confirm_unlock) {
      const confirmed = window.confirm('Are you sure you want to unlock the door?');
      if (!confirmed) return;
    }

    const service = isLocked ? 'unlock' : 'lock';
    // Immediate action feedback BEFORE awaiting async network call
    this._triggerToast(isLocked ? 'Unlocking door...' : 'Locking door...');
    try {
      await this.hass.callService('lock', service, { entity_id: entityId });
    } catch (err: any) {
      this._triggerToast(`Failed: ${err.message || err}`);
    }
  }

  private async _syncLogs(): Promise<void> {
    if (this._isSyncing || !this.hass) return;
    this._isSyncing = true;
    this._haptic('light');

    const primary = this._getEntityId();
    const baseName = primary.replace('lock.', '');
    let syncBtnId = `button.${baseName}_sync_status`;
    if (!this.hass.states[syncBtnId]) {
      const buttonKeys = Object.keys(this.hass.states).filter((e) => e.startsWith('button.'));
      syncBtnId = buttonKeys.find((k) => k.includes(baseName) && (k.includes('sync') || k.includes('log'))) || '';
    }

    try {
      // First attempt dedicated integration sync service with WebSocket return_response
      let syncedData: any = null;
      try {
        const res: any = await this.hass.callWS({
          type: 'call_service',
          domain: 'atomberg_lock',
          service: 'sync',
          service_data: {
            entity_id: primary,
          },
          return_response: true,
        });
        syncedData = res?.response || res?.service_response || res;
      } catch (svcErr) {
        // Fallback to button press or update_entity
        if (syncBtnId && this.hass.states[syncBtnId]) {
          await this.hass.callService('button', 'press', { entity_id: syncBtnId });
        } else {
          await this.hass.callService('homeassistant', 'update_entity', { entity_id: primary });
        }
      }

      if (!syncedData) {
        try {
          const allStates: any[] = await this.hass.callWS({ type: 'get_states' });
          const updatedLock = allStates.find((s) => s.entity_id === primary);
          if (updatedLock?.attributes?.unlock_history || updatedLock?.attributes?.access_logs) {
            syncedData = {
              unlock_history: updatedLock.attributes.unlock_history || updatedLock.attributes.access_logs,
              unlock_count: (updatedLock.attributes.unlock_history || updatedLock.attributes.access_logs).length,
            };
          }
        } catch {}
      }

      if (syncedData && Array.isArray(syncedData.unlock_history)) {
        this._localUnlockHistory = syncedData.unlock_history;
        const bleNew = syncedData.ble_new_count || 0;
        const total = syncedData.unlock_count || syncedData.unlock_history.length;
        if (bleNew > 0) {
          this._triggerToast(`Synced: +${bleNew} new records from lock (${total} total)`);
        } else {
          this._triggerToast(`Sync complete: ${total} records up to date`);
        }
      } else {
        this._triggerToast('Sync completed');
      }
    } catch (err: any) {
      this._triggerToast(`Sync failed: ${err.message || err}`);
    } finally {
      this._isSyncing = false;
      this.requestUpdate();
    }
  }

  private _formatFriendlyCreated(timeVal?: string | number): string {
    if (!timeVal) return '';
    const date = typeof timeVal === 'number'
      ? new Date(timeVal * (timeVal < 1e11 ? 1000 : 1))
      : new Date(timeVal);
    if (isNaN(date.getTime())) return String(timeVal);

    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();
    const timeStr = date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

    if (isToday) {
      return `Today at ${timeStr}`;
    }
    return `${date.toLocaleDateString([], { month: 'short', day: 'numeric' })}, ${timeStr}`;
  }

  private _getCredentialIcon(credType?: string): string {
    const cred = (credType || '').toLowerCase();
    if (cred.includes('fingerprint')) return 'mdi:fingerprint';
    if (cred.includes('pin') || cred.includes('code')) return 'mdi:dialpad';
    if (cred.includes('nfc') || cred.includes('card')) return 'mdi:credit-card-outline';
    if (cred.includes('app')) return 'mdi:cellphone';
    if (cred.includes('key')) return 'mdi:key';
    if (cred.includes('thumbturn') || cred.includes('manual')) return 'mdi:hand-back-right';
    if (cred.includes('otp')) return 'mdi:shield-key';
    return 'mdi:lock-open-variant';
  }

  private _renderMainView(
    stateObj: any,
    batteryNum: number | null,
    historyCount: number,
    lastUserState: string | null,
    lastEventState: string | null,
    friendlyName: string
  ): TemplateResult {
    const isLocked = stateObj.state === 'locked';
    const isUnlocking = stateObj.state === 'unlocking';
    const isLocking = stateObj.state === 'locking';

    return html`
      <!-- Option A Header: Full-width title on top, telemetry in subtitle row -->
      <div class="card-header">
        <div class="header-left">
          <div class="device-title">${friendlyName}</div>
          <div class="device-subtitle-row">
            <span class="status-state ${isLocked ? 'locked' : 'unlocked'}">${stateObj.state.toUpperCase()}</span>
            <span class="sep">•</span>
            ${batteryNum !== null
              ? html`
                  <span class="telemetry-item ${batteryNum <= 20 ? 'battery-low' : ''}">
                    <ha-icon icon="${batteryNum <= 20 ? 'mdi:battery-alert' : 'mdi:battery'}" style="--mdc-icon-size:14px;"></ha-icon>
                    <span>${batteryNum}%</span>
                  </span>
                  <span class="sep">•</span>
                `
              : ''}
            <span
              class="telemetry-item history-pill"
              @click="${() => (this._currentView = 'history')}"
              title="View Activity & Logs"
            >
              <ha-icon icon="mdi:history" style="--mdc-icon-size:14px;"></ha-icon>
              <span>Logs (${historyCount})</span>
            </span>
          </div>
        </div>
        <div class="header-right">
          ${this._isCompact()
            ? html`
                <button
                  class="collapse-btn"
                  title="Collapse Card"
                  @click="${() => (this._expanded = false)}"
                >
                  <ha-icon icon="mdi:chevron-up"></ha-icon>
                </button>
              `
            : ''}
        </div>
      </div>

      <!-- Hero Lock Control: Classic (Squarish Block) vs Google Home (Round Dial) -->
      ${this._config.full_layout === 'google_home'
        ? html`
            <div class="hero-container">
              <div
                class="lock-dial ${isLocked ? 'locked' : 'unlocked'}"
                @click="${() => {
                  this._haptic('selection');
                  this._toggleLock();
                }}"
                title="${isLocked ? 'Click to Unlock' : 'Click to Lock'}"
              >
                <ha-icon
                  icon="${isLocked
                    ? 'mdi:lock'
                    : isUnlocking
                    ? 'mdi:lock-clock'
                    : isLocking
                    ? 'mdi:lock-reset'
                    : 'mdi:lock-open-variant'}"
                  style="color: ${isLocked ? 'var(--card-locked)' : 'var(--card-unlocked)'};"
                ></ha-icon>
              </div>
              <div class="dial-status-label" style="color: ${isLocked ? 'var(--card-locked)' : 'var(--card-unlocked)'};">
                ${isUnlocking ? 'Unlocking...' : isLocking ? 'Locking...' : isLocked ? 'Locked' : 'Unlocked'}
              </div>
              <div class="dial-subtext">
                ${isLocked ? 'Tap dial to unlock' : 'Tap dial to lock'}
              </div>
            </div>
          `
        : html`
            <div
              class="lock-block ${isLocked ? 'locked' : 'unlocked'}"
              @click="${() => {
                this._haptic('selection');
                this._toggleLock();
              }}"
            >
              <div class="lock-block-left">
                <div class="lock-block-icon-btn">
                  <ha-icon
                    icon="${isLocked
                      ? 'mdi:lock'
                      : isUnlocking
                      ? 'mdi:lock-clock'
                      : isLocking
                      ? 'mdi:lock-reset'
                      : 'mdi:lock-open-variant'}"
                  ></ha-icon>
                </div>
                <div class="lock-block-text">
                  <div class="lock-block-state">
                    ${isUnlocking ? 'Unlocking...' : isLocking ? 'Locking...' : isLocked ? 'Locked' : 'Unlocked'}
                  </div>
                  <div class="lock-block-sub">
                    ${isLocked ? 'Door is secured' : 'Door is unlocked'} • Bluetooth BLE
                  </div>
                </div>
              </div>
              <button
                class="lock-block-toggle-btn"
                @click="${(e: Event) => {
                  e.stopPropagation();
                  this._haptic('selection');
                  this._toggleLock();
                }}"
              >
                <ha-icon icon="${isLocked ? 'mdi:lock-open-variant' : 'mdi:lock'}"></ha-icon>
                <span>${isLocked ? 'Unlock' : 'Lock'}</span>
              </button>
            </div>
          `}

      <!-- Footer -->
      <div class="card-footer">
        <div class="footer-status">
          <div class="status-dot"></div>
          <span>Bluetooth BLE</span>
        </div>
        <div>
          ${lastUserState || lastEventState
            ? html`<span>Last: ${lastUserState || lastEventState}</span>`
            : html`<span>Smart Lock</span>`}
        </div>
      </div>
    `;
  }

  private _renderHistoryView(
    unlockHistory: any[] = []
  ): TemplateResult {
    return html`
      <!-- History Page Header -->
      <div class="history-page-header">
        <div class="back-btn" @click="${() => (this._currentView = 'main')}">
          <ha-icon icon="mdi:arrow-left"></ha-icon>
          <span>Back</span>
        </div>
        <div class="history-title">Activity & Logs</div>
        <div class="history-count-badge">
          ${unlockHistory.length} Events
        </div>
      </div>

      <!-- Unlock Activity Section -->
      <div class="history-actions-row">
        <button
          class="sync-history-btn ${this._isSyncing ? 'syncing' : ''}"
          ?disabled="${this._isSyncing}"
          @click="${() => this._syncLogs()}"
          title="Synchronize activity logs with lock via Bluetooth"
        >
          <ha-icon icon="${this._isSyncing ? 'mdi:loading' : 'mdi:sync'}"></ha-icon>
          <span>${this._isSyncing ? 'Syncing with Lock...' : 'Sync Activity'}</span>
        </button>
      </div>

      ${unlockHistory.length === 0
        ? html`<div class="empty-history">No unlock activity recorded yet. Sync with lock via Bluetooth.</div>`
        : html`
            <div class="history-list">
              ${unlockHistory.map((item) => {
                const icon = this._getCredentialIcon(item.credential_type);
                const timeStr = this._formatFriendlyCreated(item.timestamp || item.datetime || item.recordTime);
                const userName = item.user_name || item.detail || (item.slot_id !== undefined ? `Slot ${item.slot_id}` : (item.slot !== undefined ? `Slot ${item.slot}` : 'User'));
                const credType = item.credential_type || 'Unknown';
                const source = (item.source || 'ble').toUpperCase();

                return html`
                  <div class="unlock-event-card">
                    <div class="unlock-icon-box">
                      <ha-icon icon="${icon}"></ha-icon>
                    </div>
                    <div class="unlock-details">
                      <div class="unlock-title-row">
                        <span class="unlock-user-name">${userName}</span>
                        <span class="source-badge ${source.toLowerCase()}">${source}</span>
                      </div>
                      <div class="unlock-sub-row">
                        <span class="unlock-type-pill">${credType}</span>
                        <span class="sep">•</span>
                        <span class="unlock-time">${timeStr}</span>
                      </div>
                    </div>
                  </div>
                `;
              })}
            </div>
          `}
    `;
  }

  private _renderCompact(
    stateObj: any,
    batteryNum: number | null,
    historyCount: number,
    friendlyName: string
  ): TemplateResult {
    const isLocked = stateObj.state === 'locked';
    const isUnlocking = stateObj.state === 'unlocking';
    const isLocking = stateObj.state === 'locking';
    const isUnavailable = stateObj.state === 'unavailable' || stateObj.state === 'unknown';

    const statusText = isUnavailable
      ? 'Unavailable'
      : isUnlocking
      ? 'Unlocking...'
      : isLocking
      ? 'Locking...'
      : isLocked
      ? 'Locked'
      : 'Unlocked';

    const isGoogleHome = this._config.full_layout === 'google_home';
    const layoutClass = isGoogleHome ? 'google-home' : 'classic';
    const cardStyle = [
      this._config.accent_color ? `--card-accent: ${this._config.accent_color};` : '',
      this._config.main_color ? `--card-bg: ${this._config.main_color};` : '',
    ].filter(Boolean).join(' ');

    return html`
      <ha-card
        class="compact-card ${layoutClass}"
        style="${cardStyle}"
        @click="${() => {
          this._haptic('selection');
          this._expanded = true;
        }}"
      >
        <!-- Compact Header: Clean single-line header matching Fan/AC/Washer -->
        <div class="compact-header">
          <button
            class="compact-icon-btn ${isLocked ? 'locked' : 'unlocked'} ${isUnavailable ? 'disabled' : ''}"
            title="${isLocked ? 'Unlock Door' : 'Lock Door'}"
            @click="${(e: Event) => {
              e.stopPropagation();
              this._toggleLock();
            }}"
          >
            <ha-icon icon="${isLocked ? 'mdi:lock' : 'mdi:lock-open-variant'}"></ha-icon>
          </button>
          <div class="compact-title">${friendlyName}</div>
          <ha-icon class="compact-chevron" icon="mdi:chevron-right"></ha-icon>
        </div>

        <!-- Compact Hero State: Horizontally Centered -->
        <div class="compact-center">
          <div class="compact-value ${isLocked ? 'locked' : 'unlocked'}">${statusText}</div>
        </div>

        <!-- Compact Footer: Symmetrical 3-element row matching sibling cards -->
        <div class="compact-footer">
          <button
            class="compact-action-btn ${this._isSyncing ? 'syncing' : ''}"
            title="Sync Activity"
            @click="${(e: Event) => {
              e.stopPropagation();
              this._syncLogs();
            }}"
          >
            <ha-icon icon="${this._isSyncing ? 'mdi:loading' : 'mdi:sync'}"></ha-icon>
          </button>

          <div class="compact-telemetry">
            ${batteryNum !== null
              ? html`<ha-icon icon="mdi:battery" style="--mdc-icon-size: 14px;"></ha-icon><span>${batteryNum}%</span> • `
              : ''}
            <span>${isUnavailable ? 'Offline' : 'Bluetooth BLE'}</span>
          </div>

          <button
            class="compact-action-btn"
            title="View Logs (${historyCount})"
            @click="${(e: Event) => {
              e.stopPropagation();
              this._currentView = 'history';
              this._expanded = true;
            }}"
          >
            <ha-icon icon="mdi:history"></ha-icon>
          </button>
        </div>

        <!-- Toast Notification Feedback -->
        <div class="toast ${this._showToast ? 'show' : ''}">${this._toastMessage}</div>
      </ha-card>
    `;
  }

  protected render(): TemplateResult {
    const entityId = this._getEntityId();
    const stateObj = this.hass?.states[entityId];

    if (!stateObj) {
      return html`
        <ha-card>
          <div style="padding: 16px; text-align: center; color: var(--secondary-text-color);">
            <ha-icon icon="mdi:lock-alert" style="--mdc-icon-size: 36px; margin-bottom: 8px;"></ha-icon>
            <div>No Atomberg Smart Lock found. Please configure an entity.</div>
          </div>
        </ha-card>
      `;
    }

    // Battery lookup (works with ha-atomberg-lock and dreadedlama lock integration)
    const batteryId = this._config.battery_sensor || this._getSecondaryEntityId('battery', ['battery', 'battery_level']);
    const batteryState = batteryId && this.hass.states[batteryId] ? this.hass.states[batteryId].state : null;
    const batteryNum = batteryState && !isNaN(Number(batteryState)) ? Number(batteryState) : null;

    // Last event / user lookup
    const lastUserId = this._config.last_user_sensor || this._getSecondaryEntityId('last_user', ['last_user', 'last_unlocked_by', 'last_credential', 'user']);
    const lastUserState = lastUserId && this.hass.states[lastUserId] ? this.hass.states[lastUserId].state : null;

    const lastEventId = this._config.last_event_sensor || this._getSecondaryEntityId('last_event', ['last_event', 'last_event_time', 'event', 'history', 'access_log']);
    const lastEventState = lastEventId && this.hass.states[lastEventId] ? this.hass.states[lastEventId].state : null;

    const friendlyName = this._config.name || stateObj.attributes.friendly_name || 'Atomberg Smart Lock';

    // Physical unlock history lookup from local reactive state or coordinator/lock attributes
    const unlockHistory = (
      this._localUnlockHistory ||
      stateObj?.attributes?.unlock_history ||
      stateObj?.attributes?.access_logs ||
      stateObj?.attributes?.logs ||
      (lastEventId && this.hass.states[lastEventId]?.attributes?.unlock_history) ||
      (lastEventId && this.hass.states[lastEventId]?.attributes?.access_logs) ||
      []
    ) as any[];

    const totalLogsCount = unlockHistory.length;

    // Compact mode check
    if (this._isCompact() && !this._expanded) {
      return this._renderCompact(stateObj, batteryNum, totalLogsCount, friendlyName);
    }

    const isGoogleHome = this._config.full_layout === 'google_home';
    const cardClasses = isGoogleHome ? 'google-home' : 'classic';
    const cardStyle = [
      this._config.accent_color ? `--card-accent: ${this._config.accent_color};` : '',
      this._config.main_color ? `--card-bg: ${this._config.main_color};` : '',
    ].filter(Boolean).join(' ');

    return html`
      <ha-card class="${cardClasses}" style="${cardStyle}">
        ${this._currentView === 'history'
          ? this._renderHistoryView(unlockHistory)
          : this._renderMainView(
              stateObj,
              batteryNum,
              totalLogsCount,
              lastUserState,
              lastEventState,
              friendlyName
            )}

        <!-- Toast Notification Feedback -->
        <div class="toast ${this._showToast ? 'show' : ''}">${this._toastMessage}</div>
      </ha-card>
    `;
  }
}
