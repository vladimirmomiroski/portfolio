import React from 'react';
import styles from './Btn.module.css';

export default function Btn({text}) {
  const { button } = styles;
  return (
    <button className={button}>{text}</button>
  )
}
