import React, { createContext, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {

    const [theme, setTheme] = useState("light") ;

  const contextObj = {
      theme,
      setTheme
  };

  return <Context.Provider value={contextObj}>{children}</Context.Provider>;
};
