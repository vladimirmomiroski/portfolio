import React from "react";
import { useContext } from "react";
import { Context } from "../../../context/Context";
import styles from './ImagePart.module.css';

export default function ImagePart() {

  const { container, image } = styles;
  const { theme } = useContext(Context);
  let whichTheme = "assets/images/"
   whichTheme += theme ? "photoDark.png" : "photoLight.png";
  return (
    <div className={container} >
      <img
      className={image}
        src={whichTheme}
        alt="myself"
      />
    </div>
  );
}
