import React from "react";
import styles from "./ProjectItem.module.css";

import { useContext } from "react";
import { Context } from "../../context/Context";

export default function ProjectItem({ item }) {

  const {
    img,
    card,
    title,
    bgDark,
    bgLight,
  } = styles;

  const { theme } = useContext(Context);
  const whichTheme = theme ? bgDark : bgLight

  
  const { id, name, image, host, github} = item;

  return (
    <div className={`${card} ${whichTheme}`}>
      <img className={img} src={image} alt="project" />
      <p className={title}>{name}</p>
    </div>
  );
}
