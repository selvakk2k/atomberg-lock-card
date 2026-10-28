export interface AtombergLockCardConfig {
  type: string;
  entity?: string;
  name?: string;
  theme?: string;
  card_layout?: 'default' | 'compact';
  accent_color?: string;
  default_duration?: number;
  otp_sensor?: string;
  battery_sensor?: string;
  last_user_sensor?: string;
  last_event_sensor?: string;
  confirm_unlock?: boolean;
  show_history?: boolean;
}

export interface ActiveOtpRecord {
  otp: string;
  created_at?: string;
  created_timestamp?: number;
  expires_at: string;
  valid_until_timestamp: number;
  duration_hours: number;
  lock_mac?: string;
}
