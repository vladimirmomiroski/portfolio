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
    description,
    descriptionText,
    viewProjectWrapper,
    viewProject,
    bgLight,
    bgDark,
    colorLight, 
    colorDark
    
  } = styles;

  const { theme } = useContext(Context);
  const whichTheme = theme ? bgDark : bgLight; 
  const whichColor = theme ? colorDark : colorLight;

  const { name, image, host, github, desc } = item;

  return (
    <div className={whichTheme}>
      <div className={card}>
        <div className={titleWrapper}>
          <img className={img} src={image} alt="project" />
          <p className={title}>{name}</p>
        </div>
        <div className={description}>
          <p className={`${descriptionText} ${whichColor}`}>{desc}</p>
        </div>
      </div>
      <div className={viewProjectWrapper}>
        <div className={viewProject}>
          <ProjectBtn text={"View Project"} link={host}/>
          <ProjectBtn text={"Code"} link={github}/>
        </div>
      </div>
    </div>
  );
}
