import React from "react";
import styles from "./ProjectInfoItem.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function ProjectInfoItem({ item }) {
  const { box, img, title, textBox, text, button, iconLeft, bgLight, bgDark, colorLight, colorDark } = styles;
  const { theme } = useContext(Context);
  const whichTheme = theme ? bgDark : bgLight;
  const whichColor = theme ? colorLight : colorDark;
  const { name, desc, image } = item;
  const navigate = useNavigate()

  const backToProjects = () => {
      navigate('/projects')
  }
  return (
    <div className={`${box} ${whichTheme}`}>
      <img className={img} src={"/" + image} alt="project" />
      <h2 className={`${title} ${whichColor}`}>{name}</h2>
      <div className={textBox}>
      <p className={`${text} ${whichColor}`}>{desc}</p>
      </div>
      <div className={`${button} ${whichColor}`} onClick={() => backToProjects()}>
        <FontAwesomeIcon className={iconLeft} icon={faArrowLeft} />
        </div>
    </div>
  );
}
