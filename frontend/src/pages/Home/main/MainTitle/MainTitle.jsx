import React from 'react';
import styles from './MainTitle.module.css';

export default function MainTitle() {

    const { container, text, questionMark } = styles
  return (
    <div className={container}>
        <p className={text}>What about Skills <span className={questionMark}>?</span></p>
    </div>
  )
}
