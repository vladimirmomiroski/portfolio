import React from 'react';
import styles from './ProjectButton.module.css';
import { useNavigate } from 'react-router-dom';

export default function ProjectButton({id}) {

  const navigate = useNavigate()

  const toProjectDetails = (id) => {
       navigate(`/projects/${id}`)
  }

    const { btn } = styles;
  return (
    <button onClick={() => toProjectDetails(id)}className={btn}>Details</button>
  )
}
