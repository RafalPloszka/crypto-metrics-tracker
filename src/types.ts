export interface Option {
  value: string;
  label: string;
  isDisabled?: boolean;
}

export interface OptionsGroup {
  label?: string;
  options: Option[];
}
