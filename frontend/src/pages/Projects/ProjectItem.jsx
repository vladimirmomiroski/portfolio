import React from 'react';
import styles from './ProjectItem.module.css';
import { useNavigate } from 'react-router-dom';

export default function ProjectItem({item}) {

  const { img, card, title, responsiveInfo, responsiveText, infoPart, technologiesBox, techItem } = styles;
  const { id, name, image, host, responsive, desc, technologies } = item
  const navigate = useNavigate()

  const toProjectDetails = (id) => {
       navigate(`/projects/${id}`)
  }

  return (
    <div className={card} onClick={() => toProjectDetails(id)}>
      <img className={img} src={image} alt="" />
    <p className={title}>{name}</p>
    <div className={infoPart}>
    <p>{desc}</p>
  <div className={responsiveInfo}>{responsive.map(el => (
    <div key={el} className={responsiveText}>{el}</div>
  ))}</div>
  <p>host: {host ? "tv" : "no"}</p>
  <div className={technologiesBox}>Tech: {technologies.map(el => (
    <div key={el} className={techItem}>{el},</div>
  ))}</div>
  </div>
    </div>
  )
}
