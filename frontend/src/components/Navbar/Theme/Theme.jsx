import React, { useContext } from "react";
import styles from "./Theme.module.css";
import { Context } from "../../../context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Theme() {
  const { theme, setTheme } = useContext(Context);

  const { container, containerLight, containerDark, icon, moon, bulb } = styles;

  const whichTheme = theme ? faMoon : faLightbulb;
  const containerBorder = theme ? containerLight : containerDark
  console.log(theme);

  return (
    <div className={`${container} ${containerBorder}`} onClick={() => setTheme(!theme)}>
      <div className={icon} >
        <FontAwesomeIcon icon={whichTheme} />
      </div>
    </div>
  );
}
