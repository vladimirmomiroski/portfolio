import React from "react";
import styles from './ImagePart.module.css';

export default function ImagePart() {

  const { container, image } = styles;
  return (
    <div className={container} >
      <img
      className={image}
        src="assets/images/photo.png"
        alt="myself"
      />
    </div>
  );
}
