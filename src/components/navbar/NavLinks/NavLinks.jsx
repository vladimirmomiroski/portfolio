import React, { useState } from "react";
import styles from "./NavLinks.module.css";
import Theme from "../Theme/Theme";
import BurgerMenu from '../../burgerMenu/BurgerMenu'
import { useContext } from "react";
import { Context } from "../../../context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function NavLinks() {

  const { container, normalMenu, burgerMenu, burgerIcon, colorLight, colorDark} = styles;
  const { burgerActive, setBurgerActive, theme } = useContext(Context);

  const whichColor = theme ? colorDark : colorLight; 
  const isActive = burgerActive ? faXmark : faBars;

  

  const toggleBurgerMenu = () => {
    setBurgerActive(!burgerActive);
  };

  return (
    <div className={container}>
      <Theme />
      <FontAwesomeIcon
        onClick={() => toggleBurgerMenu()}
        className={`${burgerIcon} ${whichColor}`}
        icon={isActive}
      />
      <div className={normalMenu}>
        <BurgerMenu type={"normal"} />
      </div>
      {burgerActive && (
        <div className={burgerMenu}>
          <BurgerMenu type={"burger"} />
        </div>
      )}
    </div>
  );
}
