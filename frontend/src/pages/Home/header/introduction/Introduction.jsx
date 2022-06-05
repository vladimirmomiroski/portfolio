import React from "react";
import styles from "./Introduction.module.css";
import Btn from '../../../../components/Button/Btn';

export default function Introduction() {
  const { container, title, dark, orange, about } = styles;

  return (
    <div className={container}>
      <h2 className={`${title} ${dark}`}>hey! i am</h2>
      <h2 className={`${title} ${orange}`}>vladimir momiroski</h2>
      <p className={`${about} ${dark}`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae,
        exercitationem hic. Ullam nam magni numquam, cumque reiciendis aperiam
        nesciunt vero.
      </p>
      <Btn text={'Download CV'}/>
    </div>
  );
}
