import React, { useContext } from "react";
import styles from "./MainSectionSkillsItem.module.css";
import MainSectionSkillsSkill from "./MainSectionSkillsSkill";
import { Context } from "../../../context/Context";

export default function MainSectionSkillsItem({ skillsData, title, height }) {
  const {
    container,
    textTitle,
    itemList,
    bgDark, 
    bgLight
  } = styles;

  const { theme } = useContext(Context);

  const whichBg = theme ? bgLight : bgDark; 

  return (
    <div className={`${container} ${whichBg}`}>
      <h2 className={textTitle}>{title}</h2>
      <div className={itemList}>
        {skillsData.map((skill) => (
          <MainSectionSkillsSkill key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}
