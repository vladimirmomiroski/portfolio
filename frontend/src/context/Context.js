import React, { createContext, useState } from "react";
import { projectsData } from '../projectsData';

export const Context = createContext();

export const Provider = ({ children }) => {

  const [projects, setProjects] = useState(projectsData);

    const [theme, setTheme] = useState("light") ;

  const contextObj = {
      theme,
      setTheme, 
      projects
  };

  return <Context.Provider value={contextObj}>{children}</Context.Provider>;
};
