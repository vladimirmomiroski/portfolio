import React from 'react';
import styles from './MainSectionSkillsSkill.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';


export default function MainSectionSkillsSkill({skill}) {

    const { listItem, circleIcon, iconBox } = styles;

  return (
    <div className={listItem}>
      <div className={iconBox}>
      <FontAwesomeIcon className={circleIcon} icon={faCircle} />
      </div>
       <span>{skill}</span>
       </div>
  )
}
