import { ThemeOptions } from '@mui/material/styles';

export type ThemeMode = 'light' | 'dark';
export interface CustomThemeOptions extends ThemeOptions {
  palette: {
    mode: ThemeMode;
    primary: { main: string; light?: string; dark?: string; contrastText?: string };
    secondary: { main: string; light?: string; dark?: string; contrastText?: string };
    success: { main: string; light?: string; dark?: string; contrastText?: string };
    error: { main: string; light?: string; dark?: string; contrastText?: string };
    warning: { main: string; light?: string; dark?: string; contrastText?: string };
    info: { main: string; light?: string; dark?: string; contrastText?: string };
    text: { primary: string; secondary: string; disabled: string };
    background: { default: string; paper: string; darker: string };
    divider: string;
    action: {
      active: string;
      hover: string;
      selected: string;
      disabled: string;
      disabledBackground: string;
    };
  };
}