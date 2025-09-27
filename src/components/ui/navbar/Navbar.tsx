import { useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Navbar.module.css";

import Title from "./Title";

export function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const pageTitles: Record<string, string> = {
    "/": "Home",
    "/config": "Configurações",
    "/login": "Login",
    "/login/register": "Register",
    "/login/registered": "Registered",
  };

  const pageTitle = pageTitles[location.pathname] || "Not Found";

  const handleToggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={styles["navbar"]}>
      <Title page={pageTitle} />

      <div className="mobile-menu" onClick={handleToggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

      <ul className={`${styles['nav-list']} ${isActive ? styles['active'] : ''}`}>
        <li className={styles['nav-list-link']}><a href="/">Início</a></li>
        <li className={styles['nav-list-link']}><a href="/agenda">Agenda de Eventos</a></li>
        <li className={styles['nav-list-link']}><a href="/grupos-pastorais">Grupos e Pastorais</a></li>
        <li className={styles['nav-list-link']}><a href="/contato">Contato</a></li>
      </ul>
    </nav>
  );
}