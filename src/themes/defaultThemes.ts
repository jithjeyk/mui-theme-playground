import { CustomThemeOptions, ThemeMode } from '../types/types';

export const colors = {
  dark: {
    primary: { main: '#4285F4', light: '#5E97F6', dark: '#3367D6', contrastText: '#FFFFFF' },
    secondary: { main: '#9C27B0', light: '#BA68C8', dark: '#7B1FA2', contrastText: '#FFFFFF' },
    success: { main: '#34A853', light: '#4CAF50', dark: '#2E7D32', contrastText: '#FFFFFF' },
    error: { main: '#EA4335', light: '#F44336', dark: '#D32F2F', contrastText: '#FFFFFF' },
    warning: { main: '#FBBC05', light: '#FFC107', dark: '#FFA000', contrastText: '#000000' },
    info: { main: '#4285F4', light: '#64B5F6', dark: '#1976D2', contrastText: '#FFFFFF' },
    text: { primary: '#FFFFFF', secondary: '#B0BEC5', disabled: '#546E7A' },
    background: { default: '#1E2531', paper: '#252D3A', darker: '#1A202B' },
    divider: '#313D4F',
    action: {
      active: '#FFFFFF',
      hover: 'rgba(255, 255, 255, 0.08)',
      selected: 'rgba(255, 255, 255, 0.16)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
    },
  },
  light: {
    primary: { main: '#4285F4', light: '#5E97F6', dark: '#3367D6', contrastText: '#FFFFFF' },
    secondary: { main: '#9C27B0', light: '#BA68C8', dark: '#7B1FA2', contrastText: '#FFFFFF' },
    success: { main: '#34A853', light: '#4CAF50', dark: '#2E7D32', contrastText: '#FFFFFF' },
    error: { main: '#EA4335', light: '#F44336', dark: '#D32F2F', contrastText: '#FFFFFF' },
    warning: { main: '#FBBC05', light: '#FFC107', dark: '#FFA000', contrastText: '#000000' },
    info: { main: '#4285F4', light: '#64B5F6', dark: '#1976D2', contrastText: '#FFFFFF' },
    text: { primary: '#202124', secondary: '#5F6368', disabled: '#9AA0A6' },
    background: { default: '#F8F9FA', paper: '#FFFFFF', darker: '#ECEFF1' },
    divider: '#E0E0E0',
    action: {
      active: '#202124',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
    },
  },
  vintage: {
    primary: { main: '#8B4513', light: '#A0522D', dark: '#5C4033', contrastText: '#FFFFFF' },
    secondary: { main: '#DAA520', light: '#FFD700', dark: '#B8860B', contrastText: '#000000' },
    success: { main: '#6B8E23', light: '#9ACD32', dark: '#556B2F', contrastText: '#FFFFFF' },
    error: { main: '#8B0000', light: '#A52A2A', dark: '#5C0000', contrastText: '#FFFFFF' },
    warning: { main: '#FF8C00', light: '#FFA500', dark: '#CD6600', contrastText: '#000000' },
    info: { main: '#4682B4', light: '#87CEEB', dark: '#2F4F4F', contrastText: '#FFFFFF' },
    text: { primary: '#4A2F1D', secondary: '#8B5A2B', disabled: '#A9A9A9' },
    background: { default: '#FDF5E6', paper: '#FAEBD7', darker: '#F5DEB3' },
    divider: '#DEB887',
    action: {
      active: '#4A2F1D',
      hover: 'rgba(75, 47, 29, 0.1)',
      selected: 'rgba(75, 47, 29, 0.2)',
      disabled: 'rgba(75, 47, 29, 0.3)',
      disabledBackground: 'rgba(75, 47, 29, 0.12)',
    },
  },
};

export const getDesignTokens = (mode: ThemeMode): CustomThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'dark' ? colors.dark : mode === 'light' ? colors.light : colors.vintage),
  },
  typography: {
    fontFamily: ['Roboto', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Arial', 'sans-serif'].join(','),
    h1: { fontSize: '2rem', fontWeight: 500 },
    h2: { fontSize: '1.75rem', fontWeight: 500 },
    h3: { fontSize: '1.5rem', fontWeight: 500 },
    h4: { fontSize: '1.25rem', fontWeight: 500 },
    h5: { fontSize: '1.1rem', fontWeight: 500 },
    h6: { fontSize: '1rem', fontWeight: 500 },
    subtitle1: { fontSize: '0.875rem', fontWeight: 400 },
    subtitle2: { fontSize: '0.875rem', fontWeight: 500, opacity: 0.8 },
    body1: { fontSize: '0.875rem' },
    body2: { fontSize: '0.75rem' },
    button: { fontSize: '0.875rem', textTransform: 'none', fontWeight: 500 },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: mode === 'dark' ? colors.dark.background.darker : colors.light.background.paper,
          color: mode === 'dark' ? colors.dark.text.primary : colors.light.text.primary,
          boxShadow: 'none',
          borderBottom: `1px solid ${mode === 'dark' ? colors.dark.divider : colors.light.divider}`,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: mode === 'dark' ? colors.dark.background.darker : colors.light.background.darker,
          border: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          padding: '6px 16px',
          textTransform: 'none',
          fontWeight: 500,
        },
        containedPrimary: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        outlinedPrimary: {
          borderWidth: 1,
        },
      },
      variants: [
        {
          props: { variant: 'filter' as const },
          style: {
            backgroundColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
            '&:hover': {
              backgroundColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
            },
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: 'none',
          border: `1px solid ${mode === 'dark' ? colors.dark.divider : colors.light.divider}`,
          backgroundColor: mode === 'dark' ? colors.dark.background.paper : colors.light.background.paper,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 8,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: '16px 20px 8px',
        },
        title: {
          fontSize: '1rem',
          fontWeight: 500,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '0px 20px 20px',
          '&:last-child': {
            paddingBottom: 20,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${mode === 'dark' ? colors.dark.divider : colors.light.divider}`,
          padding: '12px 16px',
        },
        head: {
          fontWeight: 500,
          color: mode === 'dark' ? colors.dark.text.secondary : colors.light.text.secondary,
          backgroundColor: mode === 'dark' ? colors.dark.background.paper : colors.light.background.paper,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          '&.Mui-selected': {
            backgroundColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(66, 133, 244, 0.08)',
          },
          '&.Mui-selected:hover': {
            backgroundColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(66, 133, 244, 0.12)',
          },
          '&:hover': {
            backgroundColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 40,
          color: 'inherit',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          fontWeight: 500,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          height: 4,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          fontWeight: 500,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 42,
          height: 26,
          padding: 0,
          '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
              transform: 'translateX(16px)',
              '& + .MuiSwitch-track': {
                opacity: 1,
              },
            },
          },
          '& .MuiSwitch-thumb': {
            width: 22,
            height: 22,
          },
          '& .MuiSwitch-track': {
            borderRadius: 13,
            opacity: 1,
          },
        },
      },
    },
  },
});

export const defaultThemes: Record<string, CustomThemeOptions> = {
  light: getDesignTokens('light'),
  dark: getDesignTokens('dark'),
  vintage: getDesignTokens('vintage' as ThemeMode), // Type cast for simplicity
};