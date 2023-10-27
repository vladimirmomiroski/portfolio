import React, { useContext } from "react";
import styles from "./ProjectBtn.module.css";
import { Context } from "../../context/Context";

export default function ProjectBtn({ text, link }) {
  const { main, bgLight, bgDark } = styles;

  const { theme } = useContext(Context);

  const whichBg = theme ? bgDark : bgLight;

  return (
    <a className={`${main} ${whichBg}`} href={link} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
}
