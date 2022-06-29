import React from 'react';
import styles from './MainSectionSkillsSkill.module.css';

export default function MainSectionSkillsSkill({skill}) {

    const { listItem } = styles;

  return (
    <li className={listItem}>{skill}</li>
  )
}
