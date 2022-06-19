import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/Context";
import styles from './ProjectInfo.module.css';
import ProjectInfoItem from "./ProjectInfoItem";

export default function ProjectInfo() {
  const { projects } = useContext(Context);
  const { id } = useParams();

  const [project, setProject] = useState({});

  const { container } = styles;

  useEffect(() => {
    if (projects.length) {
      const item = projects.find((item) => item._id === id);
      setProject(item);
    }
  }, [projects]);

  return (
    <div className={container}>
      <ProjectInfoItem item={project} />
      </div>
  );
}
