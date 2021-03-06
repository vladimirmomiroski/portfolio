import React, { useContext } from 'react';
import styles from './Projects.module.css';
import { Context  } from '../../context/Context';
import ProjectItem from './ProjectItem';


export default function Projects() {
  const { container, title, box, bgDark, colorDark, colorLight } = styles;
  const { projects, theme } = useContext(Context);
  const whichTheme = theme ? bgDark : ""
  const whichColor = theme ? colorDark : colorLight;

  
  return (
    <section className={whichTheme}>
   <div className={container}>
    <div className={`${title} ${whichColor}`}>My Projects</div>
    <div className={box}>
      {projects && projects.map(el => (
       <ProjectItem key={el._id} item={el} />
    ))}</div>
   </div>
   </section>
  )
}
