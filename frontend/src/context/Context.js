import React, { createContext, useEffect, useState } from "react";
import { fetchData } from '../fetchHandlers/fetchHandlers';

export const Context = createContext();

export const Provider = ({ children }) => {
  
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [theme, setTheme] = useState(false);
  const [msgSuccess, setMsgSuccess] = useState(false);

  const url = "http://localhost:5000/";

  useEffect(() => {
    fetchData(setProjects, url, "projects")
    fetchData(setSkills, url, "skills")
  }, []);

  const postMail = (mail) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mail),
    };

    fetch("http://localhost:5000/messages", options)
      .then((res) => {
        if (res.status === 200) {
          messageSuccess()
        }
      })
      .catch((error) => {
        throw new Error(error);
      });
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
