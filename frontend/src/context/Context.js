import React, { createContext, useEffect, useState } from "react";
import { fetchData, postData } from '../fetchHandlers/fetchHandlers';

export const Context = createContext();

export const Provider = ({ children }) => {
  
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [theme, setTheme] = useState(false);
  const [msgSuccess, setMsgSuccess] = useState(false);

  const url = process.env.REACT_APP_URL;

  useEffect(() => {
    fetchData(setProjects, url, "/projects")
    fetchData(setSkills, url, "/skills")
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

  const contextObj = {
    theme,
    setTheme,
    projects,
    skills,
    postMail,
    msgSuccess
  };

  return <Context.Provider value={contextObj}>{children}</Context.Provider>;
};
