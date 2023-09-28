import React from "react";
import styles from "./ProjectItem.module.css";

import ProjectItemSource from "./ProjectItemSourse/ProjectItemSource";
import ProjectButton from "../../components/button/ProjectButton";
import ProjectItemInfo from "./ProjectItemInfo/ProjectItemInfo";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function ProjectItem({ item }) {

  const {
    img,
    card,
    title,
    bgDark,
    bgLight,
    colorDark,
    colorLight
  } = styles;

  const { theme } = useContext(Context);
  const whichTheme = theme ? bgDark : bgLight
  const whichColor = theme ? colorDark : colorLight

  
  const { id, name, image, host, github} = item;

  return (
    <div className={`${card} ${whichTheme}`}>
      <img className={img} src={image} alt="" />
      <p className={`${title} ${whichColor}`}>{name}</p>
      <ProjectItemInfo item={item}/>
      <ProjectItemSource host={host} github={github} />
      <ProjectButton id={id} />
    </div>
  );
}
