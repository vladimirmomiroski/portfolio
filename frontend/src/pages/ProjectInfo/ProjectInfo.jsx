import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/Context";
import styles from './ProjectInfo.module.css';
import ProjectInfoItem from "./ProjectInfoItem";

export default function ProjectInfo() {
  const { projects, theme } = useContext(Context);
  const { container, darkBg } = styles;

  const whichTheme = theme ? darkBg : ""
  const { id } = useParams();

  const [project, setProject] = useState({});

  

  useEffect(() => {
    if (projects.length) {
      const item = projects.find((item) => item._id === id);
      setProject(item);
    }
  }, [projects]);

  return (
    <section className={whichTheme}>
    <div className={container}>
      <ProjectInfoItem item={project} />
      </div>
      </section>
  );
}
