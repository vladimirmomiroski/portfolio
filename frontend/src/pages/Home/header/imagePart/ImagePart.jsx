import React from "react";
import styles from './ImagePart.module.css';

export default function ImagePart() {

  const { container, image } = styles;
  return (
    <div className={container} >
      <img
      className={image}
        src="https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg"
        alt="profile"
      />
    </div>
  );
}
