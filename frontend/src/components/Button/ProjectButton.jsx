import React from 'react';
import styles from './ProjectButton.module.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

export default function ProjectButton({id}) {

  const navigate = useNavigate()

  const toProjectDetails = (id) => {
       navigate(`/projects/${id}`)
  }

    const { btn, arrowRight } = styles;
  return (
    <div onClick={() => toProjectDetails(id)}className={btn}>
      <span>Project</span>
      <span>info</span>
      <FontAwesomeIcon className={arrowRight} icon={faArrowAltCircleRight}/>
      </div>
  )
}
