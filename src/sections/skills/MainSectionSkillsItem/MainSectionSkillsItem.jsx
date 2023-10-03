import React from "react";
import styles from "./MainSectionSkillsItem.module.css";
import MainSectionSkillsSkill from "./MainSectionSkillsSkill";

export default function MainSectionSkillsItem({ skillsData, title, color, height }) {
  const {
    container,
    textTitle,
    containerLight,
    containerMedium,
    containerDark,
    titleLight, 
    titleMedium,
    titleDark,
    itemList
  } = styles;

  const whichColor =
    color === "light"
      ? containerLight
      : color === "medium"
      ? containerMedium
      : containerDark;

  const whichTitle =
    color === "light"
      ? titleLight
      : color === "medium"
      ? titleMedium
      : titleDark;

      console.log(height)


  return (
    <div className={`${container} ${whichColor} ${styles[height]}`}>
      <h2 className={`${textTitle} ${whichTitle}`}>{title}</h2>
      <div className={itemList}>
        {skillsData.map((skill) => (
          <MainSectionSkillsSkill key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}
