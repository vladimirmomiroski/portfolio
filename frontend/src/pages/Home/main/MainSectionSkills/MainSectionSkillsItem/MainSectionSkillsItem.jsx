import React from 'react';
import styles from './MainSectionSkillsItem.module.css';
import MainSectionSkillsSkill from './MainSectionSkillsSkill';

export default function MainSectionSkillsItem({skillsData, title}) {

    const { container, textTitle } = styles;
    
  return (
    <div className={container}>
        <h2 className={textTitle}>{title}</h2>
        <ul>
        {skillsData.map(skill => (
            <MainSectionSkillsSkill key={skill} skill={skill}/>
        ))}
        </ul>
    </div>
  )
}
