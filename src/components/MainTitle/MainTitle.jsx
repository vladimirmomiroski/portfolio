import React, {useContext} from 'react';
import styles from './MainTitle.module.css';
import { Context } from '../../context/Context';

export default function MainTitle({text}) {

    const { container, textStyle, colorLight, colorDark } = styles
    const { theme } = useContext(Context);
    const color = theme ? colorDark : colorLight; 

  return (
    <div className={container}>
        <p className={`${textStyle} ${color}`}>{text}</p>
    </div>
  )
}
