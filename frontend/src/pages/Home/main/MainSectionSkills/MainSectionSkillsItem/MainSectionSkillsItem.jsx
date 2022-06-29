import React from 'react';
import styles from './MainSectionSkillsItem.module.css';

export default function MainSectionSkillsItem({skillsData, title}) {

    const { container, textTitle } = styles;
    
  return (
    <div className={container}>
        <h2 className={textTitle}>{title}</h2>
        {skillsData.map(skill => (
            <div>{skill}</div>
        ))}
    </div>
  )
}
