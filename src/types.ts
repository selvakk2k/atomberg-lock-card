export interface AtombergLockCardConfig {
  type: string;
  entity?: string;
  name?: string;
  theme?: string;
  layout?: 'default' | 'compact';
  card_layout?: 'default' | 'compact';
  full_layout?: 'default' | 'google_home' | string;
  accent_color?: string;
  main_color?: string;
  battery_sensor?: string;
  last_user_sensor?: string;
  last_event_sensor?: string;
  confirm_unlock?: boolean;
  show_history?: boolean;
}
