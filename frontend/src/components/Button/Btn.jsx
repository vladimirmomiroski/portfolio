import React from 'react';
import styles from './Btn.module.css';

export default function Btn({text, func}) {
  const { button } = styles;
  return (
    <button onClick={func} className={button}>{text}</button>
    
  )
}
