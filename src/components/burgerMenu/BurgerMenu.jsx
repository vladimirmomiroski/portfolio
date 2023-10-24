import React, { useContext } from "react";
import { Context } from "../../context/Context";
import Btn from "../button/Btn";
import styles from "./BurgerMenu.module.css";

export default function BurgerMenu({ type }) {
  const {
    container,
    containerBurger,
    list,
    listBurger,
    listItem,
    listItemBurger,
    lightColor,
    darkColor,
  } = styles;
  const { theme, setIsActiveContactModal, setBurgerActive } = useContext(Context);

  const containerType = type === "burger" ? containerBurger : container;
  const ulType = type === "burger" ? listBurger : list;
  const whichItem = type === "burger" ? listItemBurger : listItem;
  const whichTheme = theme ? lightColor : darkColor;

  const openContactModal = () => {
    setBurgerActive(false)
    setIsActiveContactModal(true);
  };

  const closeBurgerMenu = () => {
    if(type === 'burger') {
      setBurgerActive(false)
    }
  }

  return (
    <div className={containerType}>
      <div className={ulType}>
        <a className={`${whichItem} ${whichTheme}`} href="#About" onClick={() => closeBurgerMenu()}>
          About
        </a>
        <a className={`${whichItem} ${whichTheme}`} href="#Skills" onClick={() => closeBurgerMenu()}>
          Skills
        </a>
        <a className={`${whichItem} ${whichTheme}`} href="#Projects" onClick={() => closeBurgerMenu()}>
          Projects
        </a>
      </div>
      <div>
        <Btn text={"Contact Me"} func={() => openContactModal()} />
      </div>
    </div>
  );
}
