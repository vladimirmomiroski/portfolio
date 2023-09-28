import React from 'react';
import styles from './ProjectButton.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function ProjectButton({id}) {

    const { btn, arrowRight, projectText } = styles;
  return (
    <div className={btn}>
      <span className={projectText}>project</span>
      <FontAwesomeIcon className={arrowRight} icon={faArrowRight}/>
      </div>
  )
}
