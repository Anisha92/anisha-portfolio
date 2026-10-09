// Tailwind setup file.
// This controls which files Tailwind should scan
// and enables class-based dark mode.

module.exports = {
  // Dark mode is switched by adding/removing the "dark" class on <html>.
  darkMode: "class",

  // All template files that may contain Tailwind utility classes.
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],

  theme: {
    // You can add custom colors, sizes, animations, etc. here if needed.
    extend: {},
  },

  // Add extra plugins later if you use forms, typography, etc.
  plugins: [],
};
