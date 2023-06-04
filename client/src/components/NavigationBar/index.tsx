import React from 'react';
import { NavLink } from "react-router-dom";
import styles from "./style.module.css"


const NavigationBar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/cats">Gatos</NavLink>
        </li>
        <li>
          <NavLink to="/images">Imágenes</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;