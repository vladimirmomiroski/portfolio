import React from "react";
import styles from "./ProjectItem.module.css";

import ProjectItemSource from "./ProjectItemSource";
import ProjectButton from "../../components/Button/ProjectButton";

export default function ProjectItem({ item }) {
  const {
    img,
    card,
    title,
    responsiveInfo,
    responsiveText,
    infoPart,
    technologiesBox,
    techItem,
  } = styles;
  const { _id, name, image, host, github, responsive, desc, technologies } =
    item;

  return (
    <div className={card}>
      <img className={img} src={image} alt="" />
      <p className={title}>{name}</p>
      <div className={infoPart}>
        <p>{desc}</p>
        <div className={responsiveInfo}>
          {responsive.map((el) => (
            <div key={el} className={responsiveText}>
              {el}
            </div>
          ))}
        </div>

        <div className={technologiesBox}>
          Tech:{" "}
          {technologies.map((el) => (
            <div key={el} className={techItem}>
              {el},
            </div>
          ))}
        </div>
        <ProjectItemSource host={host} github={github} />
      </div>
      <ProjectButton id={_id} />
    </div>
  );
}
