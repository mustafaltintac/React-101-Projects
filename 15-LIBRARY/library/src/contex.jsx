import React, { createContext, useState } from "react";

export const MainContext = createContext();

const MainContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin"));
  const [flag, setFlag] = useState(localStorage.getItem("flag"));


  const toggleIslogin = (status) => {
        setIsLogin(status);
        setFlag(status)
        localStorage.setItem("isLogin",status)
        localStorage.setItem("flag",status)
  };

  return (
    <MainContext.Provider value={{ isLogin,flag, setIsLogin, toggleIslogin }}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
