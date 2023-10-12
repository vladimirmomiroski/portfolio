import React, { useContext } from 'react';
import styles from './Projects.module.css';
import { Context } from '../../context/Context';
import ProjectItem from './ProjectItem';
import MainTitle from '../../components/MainTitle/MainTitle';


export default function Projects() {
  const { container, box, bgDark, bgLight } = styles;
  const { projects, theme } = useContext(Context);
  const whichTheme = theme ? bgDark : bgLight;
  
  return (
    <section id="Projects" className={whichTheme}>
   <div className={container}>
    <MainTitle text={"Projects"}/>
    <div className={`${box} ${whichTheme}`}>
      {projects.length && projects.map(el => (
       <ProjectItem key={el.id} item={el} />
    ))}</div>
   </div>
   </section>
  )
}
