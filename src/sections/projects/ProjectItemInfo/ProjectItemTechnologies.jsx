import React from 'react';
import styles from './ProjectItemTechnologies.module.css';

export default function ProjectItemTechnologies({technologies}) {

    const {
        technologiesBox,
        techItem,
        titleTech
      } = styles;

  return (
    <div className={technologiesBox}>
        <span className={titleTech}>Tech:</span>
        {technologies.map((el) => (
          <div key={el} className={techItem}>
            {el}
          </div>
        ))}
      </div>
  )
}
