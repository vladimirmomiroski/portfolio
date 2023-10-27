import React, { useContext } from 'react';
import styles from './MainSectionSkillsSkill.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { Context } from '../../../context/Context';



export default function MainSectionSkillsSkill({skill}) {

    const { listItem, circleIcon, iconBox, colorLight, colorDark } = styles;
    
    const { theme } = useContext(Context);
    const whichColor = theme ? colorLight : colorDark;

  return (
    <div className={`${listItem} ${whichColor}`}>
      <div className={iconBox}>
      <FontAwesomeIcon className={circleIcon} icon={faCircle} />
      </div>
       <span>{skill}</span>
       </div>
  )
}
