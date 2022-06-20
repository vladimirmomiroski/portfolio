import React from 'react';
import styles from './ProjectButton.module.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function ProjectButton({id}) {

  const navigate = useNavigate()

  const toProjectDetails = (id) => {
       navigate(`/projects/${id}`)
  }

    const { btn, arrowRight, projectText } = styles;
  return (
    <div onClick={() => toProjectDetails(id)}className={btn}>
      <span className={projectText}>project</span>
      <FontAwesomeIcon className={arrowRight} icon={faArrowRight}/>
      </div>
  )
}
