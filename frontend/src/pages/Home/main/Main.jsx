import React from 'react'
import MainTitle from './MainTitle/MainTitle';
import styles from './Main.module.css'
import MainSectionSkills from './MainSectionSkills/MainSectionSkills';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import { useContext } from 'react';
import { Context } from '../../../context/Context';


export default function Main() {

    const { mainDark, mainLight, container } = styles;
    const { theme } = useContext(Context);
    const whichTheme = theme ? mainDark : mainLight;
   

  return (
    <main className={whichTheme}>
    <div className={container}>
        <MainTitle text={"What about Skills ?"}/>
        <MainSectionSkills/>
        <PersonalInfo/>
    </div>
    </main>
  )
}
