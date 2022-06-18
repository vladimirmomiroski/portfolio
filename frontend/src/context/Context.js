import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000") 
    .then(res => res.json())
    .then(data => setProjects(data))
    
  }, [])

    const [theme, setTheme] = useState("light") ;

  const contextObj = {
      theme,
      setTheme, 
      projects
  };

  return <Context.Provider value={contextObj}>{children}</Context.Provider>;
};
