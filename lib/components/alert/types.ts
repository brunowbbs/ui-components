export type AlertOptions = {
  title: string;
  message: string;
  type?: 'success' | 'warning' | 'error';
  onAction?: () => void;
  textButton?: string;
};
