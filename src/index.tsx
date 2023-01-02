import * as React from "react";
import { useLocalStorage } from "usehooks-ts";
import { render } from "react-render-tools";

import { CssBaseline, Box, ThemeProvider, createTheme } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import App from "./App";
import "./styles/default.scss";

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function Application() {
  const [mode, setMode] = useLocalStorage<"light" | "dark">("theme", "light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#0076ff",
          },
          secondary: {
            main: "#004ba0",
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </LocalizationProvider>
    </ColorModeContext.Provider>
  );
}

render(<Application />, "re-tweet");
