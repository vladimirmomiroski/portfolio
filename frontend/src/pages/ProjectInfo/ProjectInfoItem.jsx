import React from "react";
import styles from "./ProjectInfoItem.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function ProjectInfoItem({ item }) {
  const { box, img, title, text, button, iconLeft } = styles;
  const { name, desc, image } = item;
  const navigate = useNavigate()

  const backToProjects = () => {
      navigate('/projects')
  }
  return (
    <div className={box}>
      <img className={img} src={"/" + image} alt="project" />
      <h2 className={title}>{name}</h2>
      <p className={text}>{desc}</p>
      <div className={button} onClick={() => backToProjects()}>
        <FontAwesomeIcon className={iconLeft} icon={faArrowLeft} />
        </div>
    </div>
  );
}
