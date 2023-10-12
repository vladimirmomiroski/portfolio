import React from "react";
import styles from "./MainSectionSkillsItem.module.css";
import MainSectionSkillsSkill from "./MainSectionSkillsSkill";

export default function MainSectionSkillsItem({ skillsData, title, height }) {
  const {
    container,
    textTitle,
    itemList
  } = styles;

  return (
    <div className={container}>
      <h2 className={textTitle}>{title}</h2>
      <div className={itemList}>
        {skillsData.map((skill) => (
          <MainSectionSkillsSkill key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}
