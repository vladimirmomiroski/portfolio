import React from 'react';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import styles from './MainTitle.module.css';

export default function MainTitle({text}) {

    const { container, textStyle, colorDark, colorLight, sljaknato} = styles
    const { theme } = useContext(Context);
    const whichTheme = theme ? colorDark : colorLight;
  return (
    <div className={container}>
       <div className={sljaknato}></div>
        <p className={`${textStyle} ${whichTheme}`}>{text}</p>
    </div>
  )
}
