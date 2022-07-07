import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Btn from "../Button/Btn";
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
 

  const location = useLocation();
  const navigate = useNavigate();

  const activeClass = (whichLocation) => {
    const loc = location.pathname.split("/")[1];
    return loc === whichLocation ? whichActive : "";
  };

  const goToContactPage = () => {
    navigate("/contact");
  };

  const burgerActiveHandler = () => {
    setBurgerActive(false);
  };

  return (
    <div className={containerType}>
      <ul className={ulType}>
        <NavLink
          onClick={() => burgerActiveHandler()}
          className={`${whichItem} ${whichTheme} ${activeClass("")}`}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => burgerActiveHandler()}
          className={`${whichItem} ${whichTheme} ${activeClass("about")}`}
          to="/about"
        >
          About Me
        </NavLink>
        <NavLink
         onClick={() => burgerActiveHandler()}
          className={`${whichItem} ${whichTheme} ${activeClass("projects")}`}
          to="/projects"
        >
          Projects
        </NavLink>
      </ul>
      <div onClick={() => burgerActiveHandler()}>
        <Btn text={"Contact Me"} func={goToContactPage} />
      </div>
    </div>
  );
}
