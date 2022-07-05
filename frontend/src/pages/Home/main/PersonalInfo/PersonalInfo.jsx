import React, { useContext } from 'react';
import MainTitle from '../MainTitle/MainTitle';
import styles from './PersonalInfo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faHouse } from '@fortawesome/free-solid-svg-icons';
import { Context } from '../../../../context/Context';

export default function PersonalInfo() {

  const { personalBox, personalDark, personalLight, box, boxIcon, adressText } = styles;
  const { theme } = useContext(Context);
  const whichTheme = theme ? personalDark : personalLight;
  return (
    <>
      <MainTitle text={"Personal Info"} />
      <div className={`${personalBox} ${whichTheme}`}>
       <div className={box}><FontAwesomeIcon icon={faEnvelope} className={boxIcon}/><span>vladimirmomiroski@gmail.com</span></div>
       <div className={box}><FontAwesomeIcon icon={faPhone} className={boxIcon}/><span>+389 75 259 925</span></div>
       <div className={box}><FontAwesomeIcon icon={faHouse} className={boxIcon}/><span>st. Kiro Krstevski 15,</span><span className={adressText}>Skopje</span></div>
      </div>
    </>
  )
}
