import React from 'react';
import styles from './MainSectionSkillsSkill.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';


export default function MainSectionSkillsSkill({skill}) {

    const { listItem, circleIcon } = styles;

  return (
    <span className={listItem}><FontAwesomeIcon className={circleIcon} icon={faCircle} /> {skill}</span>
  )
}
