import React from "react";
import styles from "./Introduction.module.css";
import Btn from "../../../../components/Button/Btn";
import { useContext } from "react";
import { Context } from "../../../../context/Context";
import FileSaver from 'file-saver';

export default function Introduction() {
  const {
    container,
    title,
    orange,
    about,
    aboutText,
    certificateLogo,
    resumeBox,
    colorDark,
    colorLight,
    spaceBottom,
  } = styles;
  const { theme } = useContext(Context);
  const whichTheme = theme ? colorLight : colorDark;
  let whichLogo = "assets/images/"
   whichLogo += theme ? "certificateDark.png" : "certificateLight.png" 

  const downloadCv = () => {
    FileSaver.saveAs(
      '/resource/cv.pdf',
      "Portfolio"
      )
  };

  return (
    <div className={container}>
      <h2 className={`${title} ${whichTheme} ${spaceBottom}`}>hey! i am</h2>
      <h2 className={`${title} ${orange}`}>vladimir momiroski</h2>
      <div className={about}>
      <p className={`${whichTheme} ${aboutText}`}>
        Front End Developer passsionate about creating interactive
      </p>
      <p className={`${whichTheme} ${aboutText}`}>
       application and experience on the web.
      </p>
      </div>
      <div className={resumeBox}>
        <Btn text={"Download CV"} func={downloadCv} />
        <img
          className={certificateLogo}
          src={whichLogo}
          alt="certificate logo"
        />
      </div>
    </div>
  );
}
