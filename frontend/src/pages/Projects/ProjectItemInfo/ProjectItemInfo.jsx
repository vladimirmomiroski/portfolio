import React from "react";
import styles from './ProjectItemInfo.module.css';
import ProjectItemResponsive from "./ProjectItemResponsive";
import ProjectItemTechnologies from "./ProjectItemTechnologies";

export default function ProjectItemInfo({ item }) {

  const {
    infoPart,
  } = styles;

  const { responsive, technologies } = item;
  return (
    <div className={infoPart}>
     <ProjectItemResponsive responsive={responsive}/>
      <ProjectItemTechnologies technologies={technologies} />
    </div>
  );
}
