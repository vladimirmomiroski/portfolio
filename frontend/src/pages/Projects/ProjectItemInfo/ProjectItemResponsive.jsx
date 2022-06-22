import React from 'react';
import styles from './ProjectItemResponsive.module.css';

export default function ProjectItemResponsive({responsive}) {

    const {
        responsiveInfo,
        responsiveText,
        responsiveTitle
      } = styles;

  return (
    <div className={responsiveInfo}>
      <span className={responsiveTitle}>Resp:</span>
        {responsive.map((el) => (
          <div key={el} className={responsiveText}>
            {el}
          </div>
        ))}
      </div>
  )
}
