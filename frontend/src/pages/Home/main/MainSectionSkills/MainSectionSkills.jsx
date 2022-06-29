import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../../../context/Context';
import styles from './MainSectionSkills.module.css';
import MainSectionSkillsItem from './MainSectionSkillsItem/MainSectionSkillsItem';

export default function MainSectionSkills() {

    const { container, boxLine } = styles;

    const { skills } = useContext(Context);

    const [techSkillsData, setTechSkillsData] = useState([])
    const [softSkillsData, setSoftSkillsData] = useState([])
    const [hardSkillsData, setHardSkillsData] = useState([])

    useEffect(() => {
        if(skills.length) {
            const { techSkills, softSkills, hardSkills } = skills[0]
            setTechSkillsData(techSkills)
            setSoftSkillsData(softSkills)
            setHardSkillsData(hardSkills)
        }
    }, [skills])

    
  return (
    <div className={container}>
     <div className={boxLine}></div>
     <MainSectionSkillsItem title={"Tech Skills"} skillsData={techSkillsData}/>
     <MainSectionSkillsItem title={"Soft Skills"} skillsData={softSkillsData}/>
     <MainSectionSkillsItem title={"Hard Skills"} skillsData={hardSkillsData}/>
    </div>
  )
}
