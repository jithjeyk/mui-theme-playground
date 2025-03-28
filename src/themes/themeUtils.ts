import { createTheme } from '@mui/material/styles';
import { CustomThemeOptions } from '../types/types';

export const validateTheme = (theme: any): { isValid: boolean; error?: string } => {
  if (!theme || typeof theme !== 'object') {
    return { isValid: false, error: 'Theme must be a valid JSON object' };
  }
  if (!theme.palette || !theme.palette.mode || !['light', 'dark', 'vintage'].includes(theme.palette.mode)) {
    return { isValid: false, error: 'Invalid or missing palette mode (light, dark, vintage)' };
  }
  if (!theme.palette.primary || !theme.palette.primary.main) {
    return { isValid: false, error: 'Missing primary.main color' };
  }
  return { isValid: true };
};

export const createMuiTheme = (customTheme: CustomThemeOptions) => {
  return createTheme(customTheme);
};