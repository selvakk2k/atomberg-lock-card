import { css } from 'lit';

export const cardStyles = css`
  :host {
    display: block;
    --card-accent: var(--atomberg-accent, var(--primary-color, #f5a623));
    --card-accent-rgb: 245, 166, 35;
    --card-on-accent: #121212;
    --card-bg: var(--ha-card-background, var(--card-background-color, #1e1e24));
    --card-surface: color-mix(in srgb, var(--card-bg) 92%, var(--primary-text-color, #ffffff));
    --card-surface-hover: color-mix(in srgb, var(--card-bg) 84%, var(--primary-text-color, #ffffff));
    --card-border: var(--ha-card-border-color, var(--divider-color, rgba(255, 255, 255, 0.08)));
    --card-text: var(--primary-text-color, #ffffff);
    --card-text-muted: var(--secondary-text-color, #9e9e9e);
    --card-success: #4caf50;
    --card-locked: var(--card-accent);
    --card-unlocked: #4caf50;
  }

  ha-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: var(--ha-card-border-radius, 20px);
    padding: 18px;
    box-shadow: var(--ha-card-box-shadow, 0 4px 20px rgba(0, 0, 0, 0.15));
    box-sizing: border-box;
    color: var(--card-text);
    overflow: hidden;
    position: relative;
    font-family: var(--paper-font-body1_-_font-family, inherit);
  }

  /* Header */
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
  }

  .device-title {
    font-size: 1.15rem;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .device-subtitle {
    font-size: 0.8rem;
    color: var(--card-text-muted);
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .battery-badge {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 4px 8px;
    border-radius: 12px;
    background: var(--card-surface);
    border: 1px solid var(--card-border);
  }

  .battery-low {
    color: #f44336;
    border-color: #f44336;
  }

  .history-nav-btn {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 12px;
    background: var(--card-surface);
    border: 1px solid var(--card-border);
    cursor: pointer;
    color: var(--card-text);
    transition: all 0.2s ease;
  }

  .history-nav-btn:hover {
    background: var(--card-surface-hover);
    border-color: var(--card-accent);
  }

  .history-nav-btn ha-icon {
    --mdc-icon-size: 16px;
  }

  /* Hero Section */
  .hero-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px 0 20px;
    position: relative;
  }

  .lock-dial {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    border: 3px solid var(--card-border);
    background: var(--card-surface);
  }

  .lock-dial:hover {
    transform: scale(1.03);
    background: var(--card-surface-hover);
  }

  .lock-dial:active {
    transform: scale(0.97);
  }

  .lock-dial.locked {
    border-color: var(--card-locked);
    box-shadow: 0 0 24px color-mix(in srgb, var(--card-locked) 30%, transparent),
                inset 0 0 16px color-mix(in srgb, var(--card-locked) 15%, transparent);
  }

  .lock-dial.unlocked {
    border-color: var(--card-unlocked);
    box-shadow: 0 0 24px color-mix(in srgb, var(--card-unlocked) 35%, transparent),
                inset 0 0 16px color-mix(in srgb, var(--card-unlocked) 20%, transparent);
  }

  .lock-dial ha-icon {
    --mdc-icon-size: 48px;
    transition: transform 0.3s ease;
  }

  .dial-status-label {
    margin-top: 12px;
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  .dial-subtext {
    font-size: 0.85rem;
    color: var(--card-text-muted);
    margin-top: 2px;
  }

  /* Section Dividers */
  .section-divider {
    height: 1px;
    background: var(--card-border);
    margin: 16px 0;
  }

  .section-title {
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: var(--card-text-muted);
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  /* Duration Segmented Pills */
  .pill-group {
    display: flex;
    gap: 6px;
    overflow-x: auto;
    padding-bottom: 4px;
    margin-bottom: 14px;
    scrollbar-width: none;
  }

  .pill-group::-webkit-scrollbar {
    display: none;
  }

  .pill-chip {
    flex: 1;
    min-width: 60px;
    padding: 8px 10px;
    border-radius: 12px;
    border: 1px solid var(--card-border);
    background: var(--card-surface);
    color: var(--card-text);
    font-size: 0.8rem;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
  }

  .pill-chip:hover {
    background: var(--card-surface-hover);
  }

  .pill-chip.selected {
    background: var(--card-accent);
    color: #121212;
    font-weight: 700;
    border-color: var(--card-accent);
    box-shadow: 0 2px 10px color-mix(in srgb, var(--card-accent) 40%, transparent);
  }

  /* High-Contrast Generate Button */
  .btn-generate {
    width: 100%;
    padding: 12px 16px;
    border-radius: 14px;
    border: none;
    background: var(--card-accent);
    color: #121212;
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 0.3px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 14px color-mix(in srgb, var(--card-accent) 35%, transparent);
  }

  .btn-generate ha-icon {
    --mdc-icon-size: 20px;
    color: #121212;
  }

  .btn-generate:hover {
    filter: brightness(1.08);
    transform: translateY(-1px);
  }

  .btn-generate:active {
    transform: translateY(1px);
  }

  .btn-generate:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  /* Active / Generated OTP Card */
  .otp-hero-box {
    margin-top: 14px;
    padding: 16px;
    border-radius: 16px;
    background: color-mix(in srgb, var(--card-accent) 10%, var(--card-surface));
    border: 1px solid color-mix(in srgb, var(--card-accent) 35%, var(--card-border));
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .otp-digits {
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: 6px;
    color: var(--card-text);
    font-family: 'Courier New', Courier, monospace;
    margin: 8px 0;
    user-select: all;
  }

  .otp-meta {
    font-size: 0.82rem;
    color: var(--card-text-muted);
    margin-bottom: 12px;
  }

  .otp-actions {
    display: flex;
    gap: 8px;
    width: 100%;
  }

  .otp-action-btn {
    flex: 1;
    padding: 8px 12px;
    border-radius: 10px;
    border: 1px solid var(--card-border);
    background: var(--card-surface);
    color: var(--card-text);
    font-size: 0.8rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .otp-action-btn:hover {
    background: var(--card-surface-hover);
  }

  .otp-action-btn ha-icon {
    --mdc-icon-size: 16px;
  }

  /* History Page Styles */
  .history-page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--card-border);
  }

  .back-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--card-text);
    background: var(--card-surface);
    border: 1px solid var(--card-border);
    border-radius: 10px;
    padding: 6px 12px;
    transition: all 0.2s ease;
  }

  .back-btn:hover {
    background: var(--card-surface-hover);
    border-color: var(--card-accent);
  }

  .back-btn ha-icon {
    --mdc-icon-size: 18px;
  }

  .history-title {
    font-size: 1rem;
    font-weight: 700;
  }

  .history-count-badge {
    font-size: 0.75rem;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 10px;
    background: var(--card-surface);
    color: var(--card-text-muted);
    border: 1px solid var(--card-border);
  }

  .filter-group {
    display: flex;
    gap: 6px;
    margin-bottom: 12px;
  }

  .filter-chip {
    padding: 6px 12px;
    border-radius: 10px;
    font-size: 0.78rem;
    font-weight: 600;
    cursor: pointer;
    background: var(--card-surface);
    border: 1px solid var(--card-border);
    color: var(--card-text);
    transition: all 0.2s ease;
  }

  .filter-chip.selected {
    background: var(--card-accent);
    color: #121212;
    border-color: var(--card-accent);
    box-shadow: 0 2px 8px color-mix(in srgb, var(--card-accent) 30%, transparent);
  }

  .history-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-height: 420px;
    overflow-y: auto;
    padding-right: 2px;
  }

  .history-item-card {
    padding: 12px 14px;
    border-radius: 14px;
    background: var(--card-surface);
    border: 1px solid var(--card-border);
    display: flex;
    flex-direction: column;
    gap: 8px;
    transition: border-color 0.2s;
  }

  .history-item-card.is-active {
    border-color: color-mix(in srgb, var(--card-success) 40%, var(--card-border));
    background: color-mix(in srgb, var(--card-success) 8%, var(--card-surface));
  }

  .history-card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .history-card-pin {
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.3rem;
    font-weight: 800;
    letter-spacing: 3px;
    color: var(--card-text);
  }

  .status-tag {
    font-size: 0.72rem;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .status-tag.active {
    color: var(--card-success);
    background: color-mix(in srgb, var(--card-success) 18%, transparent);
    border: 1px solid color-mix(in srgb, var(--card-success) 40%, transparent);
  }

  .status-tag.expired {
    color: var(--card-text-muted);
    background: rgba(128, 128, 128, 0.12);
  }

  .history-card-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.78rem;
    color: var(--card-text-muted);
  }

  .history-card-actions {
    display: flex;
    gap: 6px;
    margin-top: 4px;
  }

  .history-action-btn {
    flex: 1;
    padding: 6px 10px;
    border-radius: 8px;
    border: 1px solid var(--card-border);
    background: var(--card-surface);
    color: var(--card-text);
    font-size: 0.75rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .history-action-btn:hover {
    background: var(--card-surface-hover);
  }

  .history-action-btn ha-icon {
    --mdc-icon-size: 14px;
  }

  .empty-history {
    padding: 32px 16px;
    text-align: center;
    color: var(--card-text-muted);
    font-size: 0.9rem;
  }

  /* Footer */
  .card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
    padding-top: 12px;
    border-top: 1px solid var(--card-border);
    font-size: 0.8rem;
    color: var(--card-text-muted);
  }

  .footer-status {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--card-success);
    box-shadow: 0 0 6px var(--card-success);
  }

  .toast {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #323232;
    color: #fff;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 10;
  }

  .toast.show {
    opacity: 1;
  }

  /* ── Collapse Button ── */
  .collapse-btn {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid var(--card-border);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--card-surface);
    color: var(--card-text-muted);
    transition: all 0.2s ease;
    outline: none;
  }

  .collapse-btn:hover {
    background: var(--card-surface-hover);
    color: var(--card-text);
  }

  .collapse-btn ha-icon {
    --mdc-icon-size: 18px;
  }

  /* ── Compact Card (Expandable) ── */
  ha-card.compact-card {
    padding: 14px 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    cursor: pointer;
    user-select: none;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  ha-card.compact-card:hover {
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.22);
  }

  .compact-header {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .compact-icon-btn {
    width: 38px;
    height: 38px;
    border-radius: 12px;
    border: 1px solid var(--card-border);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--card-surface);
    color: var(--card-text);
    transition: all 0.2s ease;
    flex-shrink: 0;
  }

  .compact-icon-btn.locked {
    background: color-mix(in srgb, var(--card-accent) 20%, var(--card-surface));
    color: var(--card-accent);
    border-color: var(--card-accent);
    box-shadow: 0 0 12px color-mix(in srgb, var(--card-accent) 30%, transparent);
  }

  .compact-icon-btn.unlocked {
    background: color-mix(in srgb, #4caf50 20%, var(--card-surface));
    color: #4caf50;
    border-color: #4caf50;
    box-shadow: 0 0 12px rgba(76, 175, 80, 0.3);
  }

  .compact-icon-btn.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .compact-title-wrap {
    flex: 1;
    min-width: 0;
  }

  .compact-title {
    font-size: 1rem;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--card-text);
  }

  .compact-subtitle {
    font-size: 0.75rem;
    color: var(--card-text-muted);
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 2px;
  }

  .compact-chevron {
    color: var(--card-text-muted);
    opacity: 0.7;
    --mdc-icon-size: 22px;
    transition: transform 0.2s ease;
  }

  .compact-center {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 0 4px;
  }

  .compact-value {
    font-size: 1.85rem;
    font-weight: 800;
    letter-spacing: -0.5px;
    line-height: 1.1;
  }

  .compact-value.locked {
    color: var(--card-accent);
  }

  .compact-value.unlocked {
    color: #4caf50;
  }

  .compact-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding-top: 8px;
    border-top: 1px solid var(--card-border);
  }

  .compact-action-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border-radius: 12px;
    border: 1px solid var(--card-border);
    background: var(--card-surface);
    color: var(--card-text);
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .compact-action-btn:hover {
    background: var(--card-surface-hover);
  }

  .compact-action-btn ha-icon {
    --mdc-icon-size: 16px;
  }

  .compact-action-btn.pin-btn {
    background: var(--card-accent);
    color: #121212;
    border-color: var(--card-accent);
  }

  .compact-action-btn.pin-btn:hover {
    filter: brightness(1.08);
  }
`;
