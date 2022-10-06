import { useState } from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";

// Pages
import Home from "./Pages/Home";
import { ThemeContext } from "@emotion/react";

// Components

// MUI
const theme = createTheme({
  typography: {
    fontFamily: "Poppins ,seriff",
  },
});

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
        <Home />
    </ThemeProvider>
      </div>
  );
}

export default App;
