import React, { useContext } from "react";
import styles from "./About.module.css";
import AboutData from "../../AboutData";
import { Context } from "../../context/Context";

export default function About() {

  const { container, paper, box, text, title, lightBg, darkBg, circle, lightCircle } = styles;
  const { theme } = useContext(Context);
  const whichTheme = theme ? darkBg : lightBg

  return (
    <section id="About">
    <div className={container}>
      <div className={box}>
        <div className={`${paper} ${whichTheme}`}>
          <p className={title}>My Journey</p>
          {AboutData.map(({para}, idx) => (
            <p key={idx} className={text}>{para}</p>
          ))}
        </div>
        <div className={circle}>
        </div>
        <div className={lightCircle}></div>
      </div>
    </div>
    </section>
  );
}
