import React, { createContext, useEffect, useState } from "react";
import { fetchData, postData } from '../fetchHandlers/fetchHandlers';

export const Context = createContext();

export const Provider = ({ children }) => {
  
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [theme, setTheme] = useState(true);
  const [msgSuccess, setMsgSuccess] = useState(false);
  const [burgerActive, setBurgerActive] = useState(false);

  const url = process.env.REACT_APP_URL;

  useEffect(() => {
    fetchData(setProjects, url, "/projects")
    fetchData(setSkills, url, "/skills")
    const theme = localStorage.getItem("theme")
    if(theme) {
       const whichTheme = theme === "true" ? true : false
       setTheme(whichTheme)
    }
  }, []);

  const postMail = (mail) => {
    postData(mail, url, "/messages", messageSuccess)
  };

  const messageSuccess = () => {
    setMsgSuccess(true)
    setTimeout(() => {
       setMsgSuccess(false)
    }, 3000)
  }

  const themeHandler = () => {
    setTheme(!theme)
    localStorage.setItem("theme", !theme)
  }

  const contextObj = {
    theme,
    themeHandler,
    projects,
    skills,
    postMail,
    msgSuccess,
    burgerActive,
    setBurgerActive
  };

  return <Context.Provider value={contextObj}>{children}</Context.Provider>;
};
