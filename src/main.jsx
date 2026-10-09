// main.jsx — This is the entry point for the React application.
// It connects React to the HTML root element and wraps the app with ThemeProvider.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext";

// Attach the React app to the <div id="root"> inside index.html
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Render the app inside React StrictMode and the ThemeProvider
root.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
