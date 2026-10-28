import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';
import { AtombergLockCardConfig, ActiveOtpRecord } from './types';
import { cardStyles } from './styles';

const customCardEntry = {
  type: 'atomberg-lock-card',
  name: 'Atomberg Smart Lock Card',
  description: 'A custom Lovelace card for Atomberg smart locks with offline OTP generator, active PINs, and audit logs.',
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

const DURATION_OPTIONS = [
  { label: '30m', value: 0.5, desc: 'Remote (1-Time)' },
  { label: '1h', value: 1.0, desc: '1 Hour' },
  { label: '2h', value: 2.0, desc: '2 Hours' },
  { label: '4h', value: 4.0, desc: '4 Hours' },
  { label: '12h', value: 12.0, desc: '12 Hours' },
  { label: '24h', value: 24.0, desc: '24 Hours' },
];

@customElement('atomberg-lock-card')
export class AtombergLockCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: AtombergLockCardConfig;
  @state() private _selectedDuration: number = 0.5;
  @state() private _isGenerating: boolean = false;
  @state() private _latestOtp: ActiveOtpRecord | null = null;
  @state() private _toastMessage: string = '';
  @state() private _showToast: boolean = false;
  @state() private _currentView: 'main' | 'history' = 'main';
  @state() private _historyFilter: 'all' | 'active' = 'all';
  @state() private _expanded: boolean = false;

  static get styles() {
    return cardStyles;
  }

  public getCardSize(): number {
    return this._config?.card_layout === 'compact' && !this._expanded ? 2 : 5;
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
                { label: 'Material You', value: 'material_you' },
              ],
            },
          },
        },
        {
          name: 'card_layout',
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
          name: '',
          type: 'expandable',
          title: 'Theming & Colors',
          icon: 'mdi:palette',
          schema: [
            { name: 'accent_color', label: 'Accent Color', selector: { ui_color: {} } },
          ],
        },
        {
          name: '',
          type: 'expandable',
          title: 'Companion Sensors (Auto-Discovered if blank)',
          icon: 'mdi:link-variant',
          schema: [
            {
              name: 'otp_sensor',
              label: 'Generated OTP Sensor',
              selector: { entity: { domain: 'sensor' } },
            },
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
      default_duration: 0.5,
      show_history: true,
      ...config,
    };
    if (this._config.default_duration) {
      this._selectedDuration = this._config.default_duration;
    }
  }

  private _getEntityId(): string {
    if (this._config?.entity) return this._config.entity;
    if (this.hass?.states) {
      const keys = Object.keys(this.hass.states).filter((e) => e.startsWith('lock.'));
      return keys.find((e) => e.includes('atomberg') || e.includes('sl1')) || keys[0] || '';
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
    try {
      await this.hass.callService('lock', service, { entity_id: entityId });
      this._triggerToast(isLocked ? 'Unlocking door...' : 'Locking door...');
    } catch (err: any) {
      this._triggerToast(`Failed: ${err.message || err}`);
    }
  }

  private async _generateOtp(): Promise<void> {
    const entityId = this._getEntityId();
    if (!entityId || !this.hass) return;

    this._isGenerating = true;
    try {
      // Call service with WebSocket API requesting return_response
      const res: any = await this.hass.callWS({
        type: 'call_service',
        domain: 'atomberg_lock',
        service: 'generate_otp',
        service_data: {
          entity_id: entityId,
          duration_hours: this._selectedDuration,
        },
        return_response: true,
      });

      const otpData = res?.response || res?.service_response || res;
      if (otpData && otpData.otp) {
        this._latestOtp = {
          otp: otpData.otp,
          expires_at: otpData.expires_at,
          valid_until_timestamp: otpData.valid_until_timestamp,
          duration_hours: otpData.duration_hours,
        };
        this._triggerToast(`OTP ${otpData.otp} generated!`);
      } else {
        this._triggerToast('OTP generated successfully');
      }
    } catch (err: any) {
      this._triggerToast(`Failed: ${err.message || err}`);
    } finally {
      this._isGenerating = false;
    }
  }

  private _copyToClipboard(text: string): void {
    if (!text) return;
    navigator.clipboard.writeText(text).then(
      () => this._triggerToast('PIN copied to clipboard!'),
      () => this._triggerToast('Failed to copy PIN')
    );
  }

  private _shareOtp(otp: string, expiresAt: string): void {
    if (!otp) return;
    const msg = `Your guest access PIN for Atomberg Smart Lock is ${otp} followed by #. Valid until ${expiresAt}.`;

    if (navigator.share) {
      navigator.share({
        title: 'Atomberg Smart Lock Guest PIN',
        text: msg,
      }).catch(() => {
        this._copyToClipboard(msg);
      });
    } else {
      this._copyToClipboard(msg);
    }
  }

  private _renderMainView(
    stateObj: any,
    batteryNum: number | null,
    currentOtp: ActiveOtpRecord | null,
    historyCount: number,
    lastUserState: string | null,
    lastEventState: string | null,
    friendlyName: string
  ): TemplateResult {
    const isLocked = stateObj.state === 'locked';
    const isUnlocking = stateObj.state === 'unlocking';
    const isLocking = stateObj.state === 'locking';

    return html`
      <!-- Header -->
      <div class="card-header">
        <div class="header-left">
          <div>
            <div class="device-title">${friendlyName}</div>
            <div class="device-subtitle">${stateObj.state.toUpperCase()} • Bluetooth BLE</div>
          </div>
        </div>
        <div class="header-right">
          ${batteryNum !== null
            ? html`
                <div class="battery-badge ${batteryNum <= 20 ? 'battery-low' : ''}">
                  <ha-icon icon="${batteryNum <= 20 ? 'mdi:battery-alert' : 'mdi:battery'}"></ha-icon>
                  <span>${batteryNum}%</span>
                </div>
              `
            : ''}
          <div
            class="history-nav-btn"
            @click="${() => (this._currentView = 'history')}"
            title="View OTP History & Audit Log"
          >
            <ha-icon icon="mdi:history"></ha-icon>
            <span>Logs (${historyCount})</span>
          </div>
          ${this._config.card_layout === 'compact'
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

      <!-- Hero Lock Dial -->
      <div class="hero-container">
        <div
          class="lock-dial ${isLocked ? 'locked' : 'unlocked'}"
          @click="${this._toggleLock}"
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

      <div class="section-divider"></div>

      <!-- Guest OTP Generator Section -->
      <div class="section-title">
        <ha-icon icon="mdi:shield-key-outline"></ha-icon>
        <span>Offline Guest OTP Generator</span>
      </div>

      <!-- Duration Segmented Chips -->
      <div class="pill-group">
        ${DURATION_OPTIONS.map(
          (opt) => html`
            <div
              class="pill-chip ${this._selectedDuration === opt.value ? 'selected' : ''}"
              @click="${() => (this._selectedDuration = opt.value)}"
              title="${opt.desc}"
            >
              ${opt.label}
            </div>
          `
        )}
      </div>

      <button
        class="btn-generate"
        @click="${this._generateOtp}"
        ?disabled="${this._isGenerating}"
      >
        <ha-icon icon="${this._isGenerating ? 'mdi:loading' : 'mdi:numeric'}"></ha-icon>
        <span>${this._isGenerating ? 'Calculating PIN...' : 'Generate Keypad PIN'}</span>
      </button>

      <!-- Current / Generated OTP Hero Display -->
      ${currentOtp
        ? html`
            <div class="otp-hero-box">
              <div style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--card-accent);">
                Active Keypad PIN (${currentOtp.duration_hours}h)
              </div>
              <div class="otp-digits" @click="${() => this._copyToClipboard(currentOtp.otp)}">
                ${currentOtp.otp.slice(0, 4)}  ${currentOtp.otp.slice(4)}
              </div>
              <div class="otp-meta">
                Valid until: <strong>${currentOtp.expires_at || 'Boundary Expiry'}</strong>
              </div>
              <div class="otp-actions">
                <div class="otp-action-btn" @click="${() => this._copyToClipboard(currentOtp.otp)}">
                  <ha-icon icon="mdi:content-copy"></ha-icon>
                  <span>Copy PIN</span>
                </div>
                <div class="otp-action-btn" @click="${() => this._shareOtp(currentOtp.otp, currentOtp.expires_at)}">
                  <ha-icon icon="mdi:share-variant"></ha-icon>
                  <span>Share PIN</span>
                </div>
              </div>
            </div>
          `
        : ''}

      <!-- Footer -->
      <div class="card-footer">
        <div class="footer-status">
          <div class="status-dot"></div>
          <span>BLE Proxy Active</span>
        </div>
        <div>
          ${lastUserState || lastEventState
            ? html`<span>Last: ${lastUserState || lastEventState}</span>`
            : html`<span>SL1 Pro</span>`}
        </div>
      </div>
    `;
  }

  private _renderHistoryView(
    activeOtps: ActiveOtpRecord[],
    allHistory: ActiveOtpRecord[]
  ): TemplateResult {
    const nowTs = Math.floor(Date.now() / 1000);
    const displayedOtps = this._historyFilter === 'active' ? activeOtps : allHistory;

    return html`
      <!-- History Page Header -->
      <div class="history-page-header">
        <div class="back-btn" @click="${() => (this._currentView = 'main')}">
          <ha-icon icon="mdi:arrow-left"></ha-icon>
          <span>Back</span>
        </div>
        <div class="history-title">OTP Audit Log</div>
        <div class="history-count-badge">${displayedOtps.length} Records</div>
      </div>

      <!-- Filter Segmented Tabs -->
      <div class="filter-group">
        <div
          class="filter-chip ${this._historyFilter === 'all' ? 'selected' : ''}"
          @click="${() => (this._historyFilter = 'all')}"
        >
          All (${allHistory.length})
        </div>
        <div
          class="filter-chip ${this._historyFilter === 'active' ? 'selected' : ''}"
          @click="${() => (this._historyFilter = 'active')}"
        >
          Active (${activeOtps.length})
        </div>
      </div>

      <!-- History List -->
      ${displayedOtps.length === 0
        ? html`<div class="empty-history">No OTP records found in this view.</div>`
        : html`
            <div class="history-list">
              ${displayedOtps.map((item) => {
                const isActive = item.valid_until_timestamp > nowTs;
                return html`
                  <div class="history-item-card ${isActive ? 'is-active' : ''}">
                    <div class="history-card-top">
                      <div class="history-card-pin">
                        ${item.otp.slice(0, 4)} ${item.otp.slice(4)}
                      </div>
                      <div class="status-tag ${isActive ? 'active' : 'expired'}">
                        ${isActive ? 'Active' : 'Expired'}
                      </div>
                    </div>
                    <div class="history-card-details">
                      <div>Expires: ${item.expires_at} (${item.duration_hours}h)</div>
                      ${item.created_at ? html`<div>Created: ${item.created_at}</div>` : ''}
                    </div>
                    <div class="history-card-actions">
                      <div class="history-action-btn" @click="${() => this._copyToClipboard(item.otp)}">
                        <ha-icon icon="mdi:content-copy"></ha-icon>
                        <span>Copy PIN</span>
                      </div>
                      <div class="history-action-btn" @click="${() => this._shareOtp(item.otp, item.expires_at)}">
                        <ha-icon icon="mdi:share-variant"></ha-icon>
                        <span>Share</span>
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

    return html`
      <ha-card
        class="compact-card"
        style="${this._config.accent_color ? `--card-accent: ${this._config.accent_color};` : ''}"
        @click="${() => (this._expanded = true)}"
      >
        <!-- Compact Header -->
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
          <div class="compact-title-wrap">
            <div class="compact-title">${friendlyName}</div>
            <div class="compact-subtitle">
              ${batteryNum !== null
                ? html`<ha-icon icon="mdi:battery" style="--mdc-icon-size: 14px;"></ha-icon><span>${batteryNum}%</span> • `
                : ''}
              <span>${isUnavailable ? 'Offline' : 'Bluetooth BLE'}</span>
            </div>
          </div>
          <ha-icon class="compact-chevron" icon="mdi:chevron-right"></ha-icon>
        </div>

        <!-- Compact Hero State -->
        <div class="compact-center">
          <div class="compact-value ${isLocked ? 'locked' : 'unlocked'}">${statusText}</div>
        </div>

        <!-- Compact Footer Actions -->
        <div class="compact-footer">
          <button
            class="compact-action-btn pin-btn"
            title="Generate Guest Access PIN"
            @click="${(e: Event) => {
              e.stopPropagation();
              this._expanded = true;
              this._generateOtp();
            }}"
          >
            <ha-icon icon="mdi:key-outline"></ha-icon>
            <span>Generate PIN</span>
          </button>

          <button
            class="compact-action-btn"
            title="View OTP History & Audit Logs"
            @click="${(e: Event) => {
              e.stopPropagation();
              this._currentView = 'history';
              this._expanded = true;
            }}"
          >
            <ha-icon icon="mdi:history"></ha-icon>
            <span>Logs (${historyCount})</span>
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

    // Battery lookup
    const batteryId = this._config.battery_sensor || this._getSecondaryEntityId('battery', ['battery']);
    const batteryState = batteryId && this.hass.states[batteryId] ? this.hass.states[batteryId].state : null;
    const batteryNum = batteryState && !isNaN(Number(batteryState)) ? Number(batteryState) : null;

    // OTP Sensor lookup
    const otpSensorId = this._config.otp_sensor || this._getSecondaryEntityId('otp', ['last_generated_otp', 'last_otp']);
    const otpSensor = otpSensorId ? this.hass.states[otpSensorId] : null;

    // Active & Full OTP History
    let activeOtps: ActiveOtpRecord[] = [];
    if (otpSensor?.attributes?.active_otps && Array.isArray(otpSensor.attributes.active_otps)) {
      activeOtps = otpSensor.attributes.active_otps;
    }

    let allHistory: ActiveOtpRecord[] = [];
    if (otpSensor?.attributes?.otp_history && Array.isArray(otpSensor.attributes.otp_history)) {
      allHistory = otpSensor.attributes.otp_history;
    } else if (activeOtps.length > 0) {
      allHistory = activeOtps;
    }

    // Latest OTP display (either from local state or sensor)
    const currentOtp = this._latestOtp || (activeOtps.length > 0 ? activeOtps[activeOtps.length - 1] : null);

    // Last event / user lookup
    const lastUserId = this._config.last_user_sensor || this._getSecondaryEntityId('last_user', ['last_user']);
    const lastUserState = lastUserId && this.hass.states[lastUserId] ? this.hass.states[lastUserId].state : null;

    const lastEventId = this._config.last_event_sensor || this._getSecondaryEntityId('last_event', ['last_event']);
    const lastEventState = lastEventId && this.hass.states[lastEventId] ? this.hass.states[lastEventId].state : null;

    const friendlyName = this._config.name || stateObj.attributes.friendly_name || 'Atomberg Smart Lock';

    // Compact mode check
    if (this._config.card_layout === 'compact' && !this._expanded) {
      return this._renderCompact(stateObj, batteryNum, allHistory.length, friendlyName);
    }

    return html`
      <ha-card style="${this._config.accent_color ? `--card-accent: ${this._config.accent_color};` : ''}">
        ${this._currentView === 'history'
          ? this._renderHistoryView(activeOtps, allHistory)
          : this._renderMainView(
              stateObj,
              batteryNum,
              currentOtp,
              allHistory.length,
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
