import React, { createContext, useEffect, useState } from "react";
import { Skills, Projects } from '../Data'

export const Context = createContext();

export const Provider = ({ children }) => {
  
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [theme, setTheme] = useState(true);
  const [burgerActive, setBurgerActive] = useState(false);
  const [isActiveContactModal, setIsActiveContactModal] = useState(false);


  useEffect(() => {
    setSkills(Skills)
    setProjects(Projects)
    const theme = localStorage.getItem("theme")
    if(theme) {
       const whichTheme = theme === "true" ? true : false
       setTheme(whichTheme)
    }
  }, []);

  const themeHandler = () => {
    setTheme(!theme)
    localStorage.setItem("theme", !theme)
  }

  const contextObj = {
    theme,
    themeHandler,
    projects,
    skills,
    burgerActive,
    setBurgerActive,
    isActiveContactModal,
    setIsActiveContactModal
  };

  return <Context.Provider value={contextObj}>{children}</Context.Provider>;
};
