import React, { useContext } from "react";
import styles from "./NavLinks.module.css";
import Theme from "../Theme/Theme";
import BurgerMenu from '../../burgerMenu/BurgerMenu'
import { Context } from "../../../context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function NavLinks() {
  const { container, normalMenu, open, close, burgerMenu, burgerIcon, burgerClose, colorLight, colorDark, bgLight, bgDark } = styles;
  const { burgerActive, setBurgerActive, theme } = useContext(Context);

  const whichColor = theme ? colorDark : colorLight;
  const whichBg = theme ? bgDark : bgLight;
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
      <div className={`${normalMenu} ${whichColor}`}>
        <BurgerMenu type={"normal"} />
      </div>
      <div className={`${burgerMenu} ${whichColor} ${whichBg} ${burgerActive ? open : close}`}>
        <BurgerMenu type={"burger"} />
      </div>
    </div>
  );
}