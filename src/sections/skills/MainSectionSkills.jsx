import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../context/Context';
import styles from './MainSectionSkills.module.css';
import MainSectionSkillsItem from './MainSectionSkillsItem/MainSectionSkillsItem';

export default function MainSectionSkills() {

    const { theme } = useContext(Context);
    const { mainDark, mainLight, container, skillsContainer} = styles;
    const whichTheme = theme ? mainDark : mainLight;

    const { skills } = useContext(Context);

    const [techSkillsData, setTechSkillsData] = useState([])
    const [softSkillsData, setSoftSkillsData] = useState([])
    const [hardSkillsData, setHardSkillsData] = useState([])

    useEffect(() => {
        if(skills.length) {
            setTechSkillsData(skills[0])
            setSoftSkillsData(skills[1])
            setHardSkillsData(skills[2])
        }
    }, [skills])

    
  return (
    <div className={`${container} ${whichTheme}`}>
    <div className={skillsContainer}>
     <MainSectionSkillsItem color={"light"} title={"Tech Skills"} skillsData={techSkillsData}/>
     <MainSectionSkillsItem color={"medium"} title={"Soft Skills"} skillsData={softSkillsData}/>
     <MainSectionSkillsItem color={"dark"} title={"Hard Skills"} skillsData={hardSkillsData}/>
    </div>
    </div>
  )
}
