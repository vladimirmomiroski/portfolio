import React from 'react'
import MainTitle from './MainTitle/MainTitle';
import styles from './Main.module.css'
import MainSectionSkills from './MainSectionSkills/MainSectionSkills';
import PersonalInfo from './PersonalInfo/PersonalInfo';

export default function Main() {

    const { main, container } = styles;
  return (
    <main className={main}>
    <div className={container}>
        <MainTitle/>
        <MainSectionSkills/>
        <PersonalInfo/>
    </div>
    </main>
  )
}
