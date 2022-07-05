import React from "react";
import styles from "./Introduction.module.css";
import Btn from "../../../../components/Button/Btn";
import { useContext } from "react";
import { Context } from "../../../../context/Context";

export default function Introduction() {
  const {
    container,
    title,
    dark,
    orange,
    about,
    certificateLogo,
    resumeBox,
    colorDark,
    colorLight,
    spaceBottom,
  } = styles;
  const { theme } = useContext(Context);
  const whichTheme = theme ? colorLight : colorDark;

  const downloadCv = () => {
    console.log("download cv");
  };

  return (
    <div className={container}>
      <h2 className={`${title} ${whichTheme} ${spaceBottom}`}>hey! i am</h2>
      <h2 className={`${title} ${orange}`}>vladimir momiroski</h2>
      <p className={`${about} ${whichTheme}`}>
        Front-end Developer who likes to craft things
      </p>
      <div className={resumeBox}>
        <Btn text={"Download CV"} func={downloadCv} />
        <img
          className={certificateLogo}
          src="assets/images/certificateLogo.png"
          alt="certificate logo"
        />
      </div>
    </div>
  );
}
