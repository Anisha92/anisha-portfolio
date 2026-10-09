import { createContext, useContext, useEffect, useState } from "react";

/*
  A simple context wrapper used to track the current color mode.
  It stores the preference in localStorage and adds/removes a "dark"
  class on the <html> tag so Tailwind can switch themes.
*/
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Load previously selected theme or default to light mode.
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored ? stored : "light";
  });

  // Whenever the theme changes, update <html> class and save it.
  useEffect(() => {
    const html = document.documentElement;

    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  // Switch between light & dark mode.
  const toggleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  const ctxValue = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={ctxValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook to access theme inside any component.
export const useTheme = () => useContext(ThemeContext);
