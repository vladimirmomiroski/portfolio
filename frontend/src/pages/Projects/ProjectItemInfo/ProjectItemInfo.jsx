import React from "react";
import styles from './ProjectItemInfo.module.css';
import ProjectItemResponsive from "./ProjectItemResponsive";
import ProjectItemTechnologies from "./ProjectItemTechnologies";

export default function ProjectItemInfo({ item }) {

  const {
    infoPart,
    technologiesBox,
    techItem,
  } = styles;

  const { desc, responsive, technologies } = item;
  return (
    <div className={infoPart}>
     <ProjectItemResponsive responsive={responsive}/>
      <ProjectItemTechnologies technologies={technologies} />
    </div>
  );
}
