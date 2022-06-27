import App from "./App";
import { CssBaseline, Box, ThemeProvider } from "@mui/material";
import { render } from "react-dom";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

// Styles
import "./styles/default.scss";
import theme from "./theme";

// Setup root node where our React app will be attached to
const root = document.createElement("app");
document.body.appendChild(root);

// Render the app component
render(
  <>
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box>
          <main>
            <App />
          </main>
        </Box>
      </ThemeProvider>
    </LocalizationProvider>
  </>,
  document.querySelector("app")
);
