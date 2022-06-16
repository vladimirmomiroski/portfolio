import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/Context";


export default function ProjectInfo() {
  const { projects } = useContext(Context);
  const { id } = useParams();

  const [project, setProject] = useState({});

  useEffect(() => {
    const item = projects.find((item) => item.id === +id);
    setProject(item);
  }, []);

  const {name, image, desc} = project;

  console.log(image)

  return (
    <div>
      <h2>{name}</h2>
      <p>{desc}</p>
      <img src={'/' + image} alt="project" />
    </div>
  );
}
