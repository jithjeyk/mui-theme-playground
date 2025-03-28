import { Button, Stack } from '@mui/material';
import { defaultThemes } from '../themes/defaultThemes';

interface ThemeSwitcherProps {
  onThemeSelect: (theme: any) => void;
}

export const ThemeSwitcher = ({ onThemeSelect }: ThemeSwitcherProps) => {
  return (
    <Stack direction="row" spacing={2}>
      {Object.keys(defaultThemes).map((themeName) => (
        <Button
          key={themeName}
          variant="outlined"
          onClick={() => onThemeSelect(defaultThemes[themeName])}
        >
          {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
        </Button>
      ))}
    </Stack>
  );
};