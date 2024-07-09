import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [index, setIndex] = useState(0);

  const scrollToSection = (location) => {
    let hash = location.hash ? location.hash.slice(1) : null
    let elem = hash ? document.getElementById(hash): null;

    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <AppContext.Provider value={{ scrollToSection, index, setIndex }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
