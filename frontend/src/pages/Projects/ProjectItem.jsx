import React from "react";
import styles from "./ProjectItem.module.css";

import ProjectItemSource from "./ProjectItemSource";
import ProjectButton from "../../components/Button/ProjectButton";
import ProjectItemInfo from "./ProjectItemInfo/ProjectItemInfo";

export default function ProjectItem({ item }) {
  const {
    img,
    card,
    title,
  } = styles;
  const { _id, name, image, host, github} = item;

  return (
    <div className={card}>
      <img className={img} src={image} alt="" />
      <p className={title}>{name}</p>
      <ProjectItemInfo item={item}/>
      <ProjectItemSource host={host} github={github} />
      <ProjectButton id={_id} />
    </div>
  );
}
