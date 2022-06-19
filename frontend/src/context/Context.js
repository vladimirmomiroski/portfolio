import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {

  const [projects, setProjects] = useState([]);
  const [theme, setTheme] = useState("light") ;

  useEffect(() => {
    fetch("http://localhost:5000") 
    .then(res => res.json())
    .then(data => setProjects(data))
    
  }, [])

  const postMail = (mail) => {
        const options = 
        {
          method: "POST",
          headers: 
          {
            'Content-Type': 'application/json'
          }
        };
    
          fetch('url', options)
          .then(res => 
          {
          
          })
          .catch(error => 
          {
            throw new Error(error);
          });
    };

   

  const contextObj = {
      theme,
      setTheme, 
      projects,
      postMail
  };

  return <Context.Provider value={contextObj}>{children}</Context.Provider>;
};
