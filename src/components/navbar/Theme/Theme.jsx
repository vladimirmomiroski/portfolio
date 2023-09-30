import React, { useContext } from "react";
import styles from "./Theme.module.css";
import { Context } from "../../../context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Theme() {
  const { theme, themeHandler } = useContext(Context);

  const { container, icon } = styles;

  const whichTheme = theme ? faLightbulb : faMoon;

  return (
    <div className={container} onClick={() => themeHandler()}>
      <div className={icon} >
        <FontAwesomeIcon icon={whichTheme} />
      </div>
    </div>
  );
}
