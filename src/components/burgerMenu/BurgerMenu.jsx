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
    activeMenu,
    activeBurger,
    lightColor,
    darkColor,
  } = styles;
  const { theme, setBurgerActive } = useContext(Context);

  const containerType = type === "burger" ? containerBurger : container;
  const ulType = type === "burger" ? listBurger : list;
  const whichItem = type === "burger" ? listItemBurger : listItem;
  const whichTheme = theme ? lightColor : darkColor;
 

  return (
    <div className={containerType}>
        <div className={ulType}>
        <a className={`${whichItem} ${whichTheme}`} href="#">Home</a>
        <a className={`${whichItem} ${whichTheme}`} href="#About">About</a>
        <a className={`${whichItem} ${whichTheme}`} href="#Skills">Skills</a>
        <a className={`${whichItem} ${whichTheme}`} href="#Projects">Projects</a>
        </div>
      <a href="#Contact">
        <Btn text={"Contact Me"} func={() => console.log('1')}/>
        </a>
    </div>
  );
}
