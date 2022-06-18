import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/Context";
import styles from './ProjectInfo.module.css';

export default function ProjectInfo() {
  const { projects } = useContext(Context);
  const { id } = useParams();

  const [project, setProject] = useState({});

  useEffect(() => {
    if (projects.length) {
      const item = projects.find((item) => item._id === id);
      setProject(item);
    }
  }, [projects]);

  const { name, image, desc} = project;


 

  console.log(image);

  return (
    <div className={styles.container}>

      <h2>{name}</h2>
      <p>{desc}</p>
      <img src={"/" + image} alt="project" />
    </div>
  );
}
