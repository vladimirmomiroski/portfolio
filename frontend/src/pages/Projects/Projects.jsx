import React, { useContext } from 'react';
import styles from './Projects.module.css';
import { Context  } from '../../context/Context';
import ProjectItem from './ProjectItem';


export default function Projects() {

  const { projects } = useContext(Context);
  console.log(projects)

  const { container, title, box } = styles;
  return (
   <div className={container}>
    <div className={title}>My Projects</div>
    <div className={box}>
      {projects && projects.map(el => (
       <ProjectItem key={el._id} item={el} />
    ))}</div>
   </div>
  )
}
