import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.resolve(__dirname, '../src');
const stylesFile = fs.readFileSync(path.join(srcDir, 'styles.ts'), 'utf8');
const cardFile = fs.readFileSync(path.join(srcDir, 'atomberg-lock-card.ts'), 'utf8');

console.log('🎨 Starting Atomberg Lock Card Design System Compliance Audit...\n');

let errors = 0;

function check(desc, cond) {
  if (cond) {
    console.log(`✅ Passed: ${desc}`);
  } else {
    console.error(`❌ Failed: ${desc}`);
    errors++;
  }
}

// 1. Appliance Design System Tokens
check(
  'Design system background token --appliance-bg is referenced',
  stylesFile.includes('--appliance-bg')
);

check(
  'Design system surface tokens --appliance-surface and --appliance-surface-hover are referenced',
  stylesFile.includes('--appliance-surface') && stylesFile.includes('--appliance-surface-hover')
);

check(
  'Design system border token --appliance-border is referenced',
  stylesFile.includes('--appliance-border')
);

check(
  'Design system text tokens --appliance-text and --appliance-text-2 are referenced',
  stylesFile.includes('--appliance-text') && stylesFile.includes('--appliance-text-2')
);

// 2. Material You Dynamic Token Layer
check(
  'Material You theme host selector :host([theme="material_you"]) is implemented',
  stylesFile.includes(':host([theme="material_you"])')
);

check(
  'Material You sys-color tokens are used in Material You theme',
  stylesFile.includes('--md-sys-color-primary') && stylesFile.includes('--md-sys-color-surface')
);

// 3. Card Radii & Themes
check(
  'Classic view card border radius uses standardized 16px fallback',
  stylesFile.includes('border-radius: var(--ha-card-border-radius, 16px)')
);

check(
  'Google Home layout override uses standardized 28px border radius',
  stylesFile.includes('border-radius: 28px')
);

// 4. Custom Card Registration
check(
  'Registers in window.customCards catalog',
  cardFile.includes('window as any).customCards') && cardFile.includes('type: \'atomberg-lock-card\'')
);

check(
  'Custom card entry specifies lock domain and preview flag',
  cardFile.includes('domain: \'lock\'') && cardFile.includes('preview: true')
);

// 5. User Feedback & Haptics
check(
  'Card implements tactile haptic dispatch helper',
  cardFile.includes('private _haptic(')
);

check(
  'Card implements toast notifications for state transitions',
  cardFile.includes('this._triggerToast(\'Door locked\')') && cardFile.includes('this._triggerToast(\'Door unlocked\')')
);

console.log('');
if (errors > 0) {
  console.error(`💥 ${errors} design system check(s) failed.`);
  process.exit(1);
} else {
  console.log('🎉 All Design System Compliance Checks Passed Cleanly!\n');
}
