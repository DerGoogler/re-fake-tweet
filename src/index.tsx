import App from "./App";
import { CssBaseline, Box, ThemeProvider } from "@mui/material";
import { render } from "react-dom";

// Styles
import "./styles/default.scss";
import theme from "./theme";

// Setup root node where our React app will be attached to
const root = document.createElement("app");
document.body.appendChild(root);

// Render the app component
render(
  <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <main>
          <App />
        </main>
      </Box>
    </ThemeProvider>
  </>,
  document.querySelector("app")
);
