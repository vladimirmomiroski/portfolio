import React from 'react'
import MainTitle from './MainTitle/MainTitle';
import styles from './Main.module.css'
import MainSectionSkills from './MainSectionSkills/MainSectionSkills';

export default function Main() {

    const {container} = styles;
  return (
    <div className={container}>
        <MainTitle/>
        <MainSectionSkills/>
    </div>
  )
}
