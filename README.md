# Atomberg Smart Lock Card (`atomberg-lock-card`)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HACS: Custom](https://img.shields.io/badge/HACS-Custom%20Card-orange.svg)](https://hacs.xyz)

A custom Lovelace card for Atomberg Smart Door Locks (SL1 / SL1 Pro) in Home Assistant. Designed with the [Appliance Lovelace Design System](https://github.com/selvakk2k/ha-atomberg-lock) for seamless Material 3 theming, tactile lock/unlock control, and real-time audit logs.

> [!NOTE]
> **Integration Compatibility**: This card is fully compatible with both:
> - **[@dreadedlama/atomberg-lock](https://github.com/dreadedlama/atomberg-lock)** (the primary community integration for Atomberg smart door locks).
> - **[`ha-atomberg-lock`](https://github.com/selvakk2k/ha-atomberg-lock)** (the reference demo integration powered by `atomberg-py`).
>
> It auto-discovers standard `lock.*` entities and their companion battery and audit log sensors.

---

## Features

- **Hero Lock Control**: Concentric lock dial (Google Home style) or tactile action card (Classic style) with animated state transitions.
- **Activity & Access Logs**: Real-time audit history viewer decoding user names, credential slots (fingerprint, NFC keycard, PIN), and timestamps.
- **On-Demand Bluetooth Sync**: One-touch synchronization button to pull the latest hardware flash records over BLE.
- **Diagnostic Telemetry**: Live battery percentage with low-power alerts, connection status, and last unlock credential resolution.
- **Compact & Expandable Views**: Space-saving collapsed view (matching Fan, AC, and Washer cards) that expands on tap.
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
layout: default
full_layout: google_home
theme: material_you
confirm_unlock: true
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
| `layout` | string | `default` | Layout style (`default` or `compact`). |
| `full_layout` | string | `default` | Full view presentation (`default` or `google_home`). |
| `accent_color` | string | *Theme Accent* | Custom accent color override. |
| `main_color` | string | *Theme Background* | Custom background color override. |
| `confirm_unlock` | boolean | `false` | When true, prompts for confirmation before unlocking. |
| `battery_sensor` | string | *Auto-Discovered* | Primary battery level sensor (`sensor.*_battery`). |
| `last_user_sensor` | string | *Auto-Discovered* | Sensor reporting the name or slot of the last unlock user. |
| `last_event_sensor` | string | *Auto-Discovered* | Sensor reporting the description of the last lock event. |

---

## License

This project is licensed under the MIT License.

