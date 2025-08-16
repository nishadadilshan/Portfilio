import React from "react";
import "./Footer.css";
import { useTheme } from "../../context/ThemeContext";

export const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`footer ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      Copyright &#169; 2025 Dilshan Weerathunga. All right received.
    </footer>
  );
};
