import React, { createContext, useEffect, useState } from "react";
import { Skills, Projects } from '../Data'

export const Context = createContext();

export const Provider = ({ children }) => {
  
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [theme, setTheme] = useState(true);
  const [burgerActive, setBurgerActive] = useState(false);
  const [isActiveContactModal, setIsActiveContactModal] = useState(false);
  const [messageOnSubmit, setMessageOnSubmit] = useState(false);


  const displaySuccessMessage = () => {
    setMessageOnSubmit(true);

    const id = setTimeout(() => {
      setMessageOnSubmit(false);
      clearTimeout(id);
    }, 4000);
  };

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
    setIsActiveContactModal,
    messageOnSubmit,
    displaySuccessMessage
  };

  return <Context.Provider value={contextObj}>{children}</Context.Provider>;
};
