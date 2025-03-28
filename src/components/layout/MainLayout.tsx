import { useState, useEffect } from "react";
import { ThemeProvider, Grid, Container } from "@mui/material";
import { createMuiTheme } from "../../themes/themeUtils";
import { defaultThemes } from "../../themes/defaultThemes";
import { ThemeInput } from "../ThemeInput";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { ComponentPreview } from "../ComponentPreview";
export default function MainLayout() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem("customTheme");
    return savedTheme ? JSON.parse(savedTheme) : defaultThemes.light;
  });

  const muiTheme = createMuiTheme(currentTheme);

  const handleThemeChange = (theme: any) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <Container maxWidth="lg" sx={{ padding: "20px" }}>
        <Grid container spacing={3}>
          {/* Left Side: ThemeInput */}
          <Grid item xs={12} md={6}>
            <h1>Theme Playground</h1>
            <ThemeSwitcher onThemeSelect={handleThemeChange} />
            <ThemeInput onThemeChange={handleThemeChange} />
          </Grid>

          {/* Right Side: ThemeSwitcher and ComponentPreview */}
          <Grid item xs={12} md={6}>
            <ComponentPreview />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
