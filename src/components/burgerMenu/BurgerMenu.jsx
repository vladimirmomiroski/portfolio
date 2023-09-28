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

  const whichActive = type === "burger" ? activeBurger : activeMenu;
  const containerType = type === "burger" ? containerBurger : container;
  const ulType = type === "burger" ? listBurger : list;
  const whichItem = type === "burger" ? listItemBurger : listItem;
  const whichTheme = theme ? lightColor : darkColor;
 


  const activeClass = (whichLocation) => {
    // const loc = location.pathname.split("/")[1];
    return 0;
  };

  // const goToContactPage = () => {
  //   navigate("/contact");
  // };

  const burgerActiveHandler = () => {
    setBurgerActive(false);
  };

  return (
    <div className={containerType}>
  
      <div onClick={() => burgerActiveHandler()}>
        <Btn text={"Contact Me"} func={() => console.log('1')}/>
      </div>
    </div>
  );
}
