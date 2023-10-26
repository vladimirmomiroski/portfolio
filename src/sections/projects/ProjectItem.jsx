import React from "react";
import styles from "./ProjectItem.module.css";
import ProjectBtn from "../../components/button/ProjectBtn";

import { useContext } from "react";
import { Context } from "../../context/Context";

export default function ProjectItem({ item }) {
  const {
    img,
    card,
    titleWrapper,
    title,
    bgDark,
    bgLight,
    description,
    descriptionText,
    viewProjectWrapper,
    viewProject,
    cardWrapper
    
  } = styles;

  const { theme } = useContext(Context);
  const whichTheme = theme ? bgDark : bgLight;

  const { id, name, image, host, github, desc } = item;

  return (
    <div className={cardWrapper}>
      <div className={`${card} ${whichTheme}`}>
        <div className={titleWrapper}>
          <img className={img} src={image} alt="project" />
          <p className={title}>{name}</p>
        </div>
        <div className={description}>
          <p className={descriptionText}>{desc}</p>
        </div>
      </div>
      <div className={viewProjectWrapper}>
        <div className={viewProject}>
          <ProjectBtn text={"View Project"} link={host} style={"main"}/>
          <ProjectBtn text={"Code"} link={github} style={"secondary"}/>
        </div>
      </div>
    </div>
  );
}
