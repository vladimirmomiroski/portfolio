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
  const { theme, setIsActiveContactModal } = useContext(Context);

  const containerType = type === "burger" ? containerBurger : container;
  const ulType = type === "burger" ? listBurger : list;
  const whichItem = type === "burger" ? listItemBurger : listItem;
  const whichTheme = theme ? lightColor : darkColor;
 
  const openContactModal = () => {
        setIsActiveContactModal(true);
  }

  return (
    <div className={containerType}>
        <div className={ulType}>
        <a className={`${whichItem} ${whichTheme}`} href="#About">About</a>
        <a className={`${whichItem} ${whichTheme}`} href="#Skills">Skills</a>
        <a className={`${whichItem} ${whichTheme}`} href="#Projects">Projects</a>
        </div>
      <div>
        <Btn text={"Contact Me"} func={() => openContactModal()}/>
        </div>
    </div>
  );
}
