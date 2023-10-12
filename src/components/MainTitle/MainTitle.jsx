import React from 'react';
import styles from './MainTitle.module.css';

export default function MainTitle({text}) {

    const { container, textStyle } = styles

  return (
    <div className={container}>
        <p className={textStyle}>{text}</p>
    </div>
  )
}
