import React, {useContext} from 'react'
import styles from './Theme.module.css';
import { Context } from '../../../context/Context';

export default function Theme() {

  const { theme, setTheme } = useContext(Context)
  
  const { container, icon, left, right } = styles;

  
  const whichMode = theme ? left : right;
  console.log(theme)

  console.log(whichMode)
  return (
    <div className={container}>
      <div className={`${whichMode} ${icon}`} onClick={() => setTheme(!theme)}></div>
    </div>
  )

}
