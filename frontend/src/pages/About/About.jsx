import React from "react";
import styles from "./About.module.css";
import AboutData from "../../AboutData";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function About() {
  const { container, paper, box, leftGlue, rightGlue, text, title, lightBg, darkBg } = styles;
  const { theme } = useContext(Context);
  const whichTheme = theme ? darkBg : lightBg
  return (
    <section className={whichTheme}>
    <div className={container}>
      <div className={box}>
        <div className={leftGlue}></div>
        <div className={rightGlue}></div>
        <div className={paper}>
          <p className={title}>My Journey</p>
          {AboutData.map(({para}, idx) => (
            <p key={idx} className={text}>{para}</p>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}
