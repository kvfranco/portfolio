import siteLogoDark from "../assets/icons/logo-dark.svg";
import siteLogoLight from "../assets/icons/logo-light.svg";

import lightModeIcon from "../assets/icons/light-mode-icon.svg";
import darkModeIcon from "../assets/icons/dark-mode-icon.svg";

import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import Instance from "./Instance";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  function handleDarkMode() {
    setIsDarkMode(prevIsDarkMode => {
      return !prevIsDarkMode;
    });
  }

  useEffect(() => {
    document.querySelector('body')?.classList.toggle('light', !isDarkMode);
  }, [isDarkMode]);

  return (
    <header className={styles.header}>
      <a href=".">
        <img src={isDarkMode ? siteLogoDark : siteLogoLight} alt="Ícone do site" />
      </a>
      <Instance />
      <button onClick={handleDarkMode}>
        <img
          src={isDarkMode ? darkModeIcon : lightModeIcon}
          alt="Ícone para alternar entre modo claro/escuro"
        />
      </button>
    </header>
  );
}