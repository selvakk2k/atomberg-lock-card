# Atomberg Smart Lock Card (`atomberg-lock-card`)

A Lovelace custom card for Atomberg Smart Door Locks (SL1 / SL1 Pro) in Home Assistant. Designed with the [Appliance Lovelace Design System](https://github.com/selvakk2k/ha-atomberg-lock) for seamless Material 3 theming, offline dynamic guest OTP PIN derivation, and real-time audit logs.

---

## Features

- **Hero Lock Dial**: High-contrast concentric lock dial with tactile lock/unlock control and animated state transitions.
- **Offline Guest OTP Generator**: Derive time-bounded 8-digit keypad PINs with 1-click duration selection (`30m Remote`, `1h`, `2h`, `4h`, `12h`, `24h`).
- **High-Contrast Keypad Display**: Displays the active PIN with grouped digits (`9362 5943`) for effortless keypad entry.
- **1-Click Copy & Share**: Instantly copy PIN to clipboard or share a pre-formatted guest invitation message.
- **Active PINs & History**: Real-time list of all currently active guest PINs with expiration timestamps.
- **Diagnostic Telemetry**: Battery percentage with low-power alerts, Bluetooth connection health, and last unlock credential resolution.
- **Visual Card Editor**: Complete `getConfigForm` editor schema with 3-tier entity auto-discovery.

---

## Installation

### Manual Installation via Lovelace Resources

1. Copy [`dist/atomberg-lock-card.js`](file:///d:/GitHub/atomberg-lock-card/dist/atomberg-lock-card.js) to your Home Assistant `config/www/` directory.
2. In Home Assistant, go to **Settings -> Dashboards -> More Options (top right) -> Resources**.
3. Click **Add Resource**:
   - **URL**: `/local/atomberg-lock-card.js`
   - **Resource Type**: `JavaScript Module`
4. Add the card to any dashboard view.

---

## Card Configuration

### Basic Example (Zero-Config Auto-Discovery)

```yaml
type: custom:atomberg-lock-card
entity: lock.atomberg_sl1_pro
```

### Advanced Example

```yaml
type: custom:atomberg-lock-card
entity: lock.atomberg_sl1_pro
name: Front Door
default_duration: 1.0
confirm_unlock: true
otp_sensor: sensor.atomberg_sl1_pro_last_generated_otp
battery_sensor: sensor.atomberg_sl1_pro_battery
last_user_sensor: sensor.atomberg_sl1_pro_last_user
last_event_sensor: sensor.atomberg_sl1_pro_last_event
```

---

## Configuration Reference

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `entity` | string | *Auto-Discovered* | Primary `lock.*` entity ID. |
| `name` | string | *Friendly Name* | Custom title displayed in the card header. |
| `theme` | string | `default` | Card theme (`default` or `material_you`). |
| `card_layout` | string | `default` | Layout style (`default` or `compact`). |
| `accent_color` | string | *Theme Accent* | Custom accent color override. |
| `default_duration` | number | `0.5` | Default duration in hours for the OTP generator (`0.5` to `24.0`). |
| `confirm_unlock` | boolean | `false` | When true, prompts for confirmation before unlocking. |
| `otp_sensor` | string | *Auto-Discovered* | Sensor tracking active and historical guest OTPs. |
| `battery_sensor` | string | *Auto-Discovered* | Primary battery level sensor. |
| `last_user_sensor` | string | *Auto-Discovered* | Sensor reporting the name or slot of the last unlock user. |
| `last_event_sensor` | string | *Auto-Discovered* | Sensor reporting the description of the last lock event. |

---

## License

This project is licensed under the MIT License.
