import React from "react";
import styles from "./About.module.css";

const aboutMe = [
   "Hello,", "My name is Vladimir Momiroski, I am 28 years old, I was born in Tetovo, I'm currently living in Skopje. My interests have always been related to computers, as a child playing video games",
  "and today everything that is connected to programming. In addition to computers, i want to",
  "read and find out about various topics that interest me.",
];

export default function About() {
  const { container, paper, box, leftGlue, rightGlue, text, title } = styles;
  return (
    <div className={container}>
      <div className={box}>
        <div className={leftGlue}></div>
        <div className={rightGlue}></div>
        <div className={paper}>
          <p className={title}>My Journey</p>
          {aboutMe.map((el) => (
            <p className={text}>{el}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
