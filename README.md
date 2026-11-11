# Atomberg Smart Lock Card (`atomberg-lock-card`)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Marketplace: Custom](https://img.shields.io/badge/Marketplace-Custom%20Card-41BDF5.svg)](https://www.home-assistant.io/integrations/marketplace/)

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

### Method 1: Via Home Assistant Marketplace (Recommended)

*Requires Home Assistant **2026.11** or newer. (On an older version? Expand the legacy HACS instructions below.)*

[![Open your Home Assistant instance and open a repository in the Marketplace.](https://my.home-assistant.io/badges/marketplace_repository.svg)](https://my.home-assistant.io/redirect/marketplace_repository/?owner=selvakk2k&repository=atomberg-lock-card&category=plugin)

1. Click the **Open Marketplace repository** button above, or go to **Settings** → **Marketplace** in Home Assistant.
2. In the upper-right corner, select **Add from link**.
3. Under **GitHub link**, enter `https://github.com/selvakk2k/atomberg-lock-card` (connect your GitHub account if prompted), then select **Add**. *(If prompted for **Type**, select **Dashboard** and select **Add** again.)*
4. Open **Atomberg Smart Lock Card** from the list, select **Download**, and reload your dashboard.

<details>
<summary>Home Assistant 2026.10 or older (Legacy HACS)</summary>

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=selvakk2k&repository=atomberg-lock-card&category=plugin)

1. Click the **Open repository in HACS** button above, or open **HACS** from your Home Assistant sidebar.
2. Click the top-right menu (⋮) → **Custom repositories** → Add `https://github.com/selvakk2k/atomberg-lock-card` with category **Dashboard**.
3. Search for **Atomberg Smart Lock Card**, click **Download**, and reload your dashboard.

</details>

### Method 2: Manual Installation via Lovelace Resources

1. Copy [`dist/atomberg-lock-card.js`](dist/atomberg-lock-card.js) to your Home Assistant `config/www/` directory.
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

## My Integrations & Lovelace Cards

| Integration / Card | Category | Description | Status |
| :--- | :--- | :--- | :--- |
| [Atomberg Smart Lock](https://github.com/selvakk2k/ha-atomberg-lock) | Integration | Local BLE & Cloud-Assisted key extraction for Atomberg Smart Door Locks (SL1 / SL1 Pro) | `Stable` |
| [Atomberg Smart Lock Card](https://github.com/selvakk2k/atomberg-lock-card) | Lovelace Card | Custom Lovelace card for Atomberg Smart Door Locks with activity & audit logs | `Stable` |
| [CP PLUS STQC](https://github.com/selvakk2k/ha-cpplus-stqc) | Integration | Local NVR & STQC IP Camera integration with real-time AI push events | `Beta` |
| [Panasonic AC India](https://github.com/selvakk2k/ha-panasonic-ac-in) | Integration | Local IR & Cloud MQTT control for Panasonic MirAIe Air Conditioners | `Stable` |
| [Panasonic AC India Card](https://github.com/selvakk2k/panasonic-ac-card-in) | Lovelace Card | Modern Lovelace card for Panasonic ACs | `Stable` |
| [Indian BLDC Fan IR](https://github.com/selvakk2k/ha-bldc-fan-ir) | Integration | Native Home Assistant integration for Indian BLDC ceiling fans (Atomberg, Superfan) | `Stable` |
| [Indian BLDC Fan Card](https://github.com/selvakk2k/bldc-fan-card) | Lovelace Card | Interactive Lovelace card with speed dial & mode toggles for BLDC fans | `Stable` |
| [IFB Washer Local](https://github.com/selvakk2k/ifb-washer-local) | Integration | Local Wi-Fi integration for IFB Front Load Washing Machines & Washer Dryers | `Beta` |
| [IFB Washer Card](https://github.com/selvakk2k/ifb-washer-card) | Lovelace Card | Dedicated Lovelace card for IFB washers & dryers with cycle controls | `Beta` |
| [Tinxy Local Python](https://github.com/selvakk2k/ha-tinxylocal) | Integration | Pure-Python local control for Tinxy smart switches and modules | `Stable` |

---

## Credits & License

### Project Contributors & AI Attribution
* **Lead Architecture & Hardware Validation**: [@selvakk2k](https://github.com/selvakk2k)
* **Code Implementation & Engineering**: **Antigravity** (Google DeepMind)
* **Automated Code Review & Auditing**: **CodeRabbit** ([@coderabbitai](https://github.com/coderabbitai))
* **Pre-Release Code Review & Auditing**: **Claude** (Anthropic)

Licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

