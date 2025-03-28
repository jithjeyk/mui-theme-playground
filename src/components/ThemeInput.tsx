import { useState } from "react";
import {
  TextField,
  TextareaAutosize,
  Button,
  Typography,
  Box,
  IconButton,
  Tooltip,
  Divider,
} from "@mui/material";
import { ContentCopy as ContentCopyIcon } from "@mui/icons-material";
import { validateTheme } from "../themes/themeUtils";

interface ThemeInputProps {
  onThemeChange: (theme: any) => void;
}

// Example theme JSON as a constant
const EXAMPLE_THEME = {
  palette: {
    mode: "dark",
    primary: { main: "#4285F4" },
    secondary: { main: "#9C27B0" },
    success: { main: "#34A853" },
    error: { main: "#EA4335" },
    warning: { main: "#FBBC05" },
    info: { main: "#4285F4" },
    text: { primary: "#FFFFFF", secondary: "#B0BEC5", disabled: "#546E7A" },
    background: { default: "#1E2531", paper: "#252D3A", darker: "#1A202B" },
    divider: "#313D4F",
    action: {
      active: "#FFFFFF",
      hover: "rgba(255, 255, 255, 0.08)",
      selected: "rgba(255, 255, 255, 0.16)",
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
    },
  },
};

export const ThemeInput = ({ onThemeChange }: ThemeInputProps) => {
  const [jsonInput, setJsonInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleApply = () => {
    try {
      const parsedTheme = JSON.parse(jsonInput.trim() || "{}"); // Handle empty input
      const validation = validateTheme(parsedTheme);
      if (validation.isValid) {
        setError(null);
        onThemeChange(parsedTheme);
        localStorage.setItem("customTheme", jsonInput.trim());
      } else {
        setError(validation.error ?? "Unknown validation error");
      }
    } catch (e) {
      setError("Invalid JSON format");
    }
  };

  const handleCopyExample = () => {
    const formattedJson = JSON.stringify(EXAMPLE_THEME, null, 2);
    navigator.clipboard.writeText(formattedJson).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset tooltip after 2s
    });
  };

  const handleUseExample = () => {
    const formattedJson = JSON.stringify(EXAMPLE_THEME, null, 2);
    setJsonInput(formattedJson);
    setError(null); // Clear any previous errors
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "0 auto", padding: 2 }}>
      <TextField
        label="Enter Theme JSON"
        multiline
        rows={4}
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        fullWidth
        margin="normal"
        placeholder="Paste or type your theme JSON here..."
        error={!!error}
        helperText={error || " "}
        sx={{
            '& .MuiInputBase-root': {
              resize: 'vertical', // Allows vertical resizing by user if desired
            },
            '& .MuiInputBase-input': {
              overflow: 'auto', // Ensures content is scrollable if it exceeds max height
              maxHeight: '500px', // Optional: Set a max height to prevent excessive growth
            },
          }}
      />
      <Button
        variant="contained"
        onClick={handleApply}
        disabled={!jsonInput.trim()} // Disable if input is empty
        sx={{ mb: 2 }}
      >
        Apply Theme
      </Button>

      {/* Example Section */}
      <Box sx={{ mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          Example Theme
        </Typography>
        <Box
          sx={{
            position: "relative",
            backgroundColor: "background.paper",
            p: 2,
            borderRadius: 1,
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <pre
            style={{ margin: 0, whiteSpace: "pre-wrap", fontSize: "0.875rem" }}
          >
            {JSON.stringify(EXAMPLE_THEME, null, 2)}
          </pre>
          <Tooltip
            title={copied ? "Copied!" : "Copy to Clipboard"}
            placement="top"
          >
            <IconButton
              onClick={handleCopyExample}
              size="small"
              sx={{ position: "absolute", top: 8, right: 8 }}
            >
              <ContentCopyIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
        <Button variant="outlined" onClick={handleUseExample} sx={{ mt: 1 }}>
          Use Example
        </Button>
      </Box>
    </Box>
  );
};
