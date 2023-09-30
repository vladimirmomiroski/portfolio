import React from "react";
import styles from "./About.module.css";
import AboutData from "../../AboutData";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function About() {
  const { container, paper, box, leftHalf, text, title, lightBg } = styles;
  const { theme } = useContext(Context);
  return (
    <section id="About" className={lightBg}>
    <div className={container}>
      <div className={box}>
        <div className={paper}>
          <div className={leftHalf}></div>
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
