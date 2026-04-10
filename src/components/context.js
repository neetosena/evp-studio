import React, { useContext, useEffect, useState } from "react";
import client from "./ContentfulClient";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [index, setIndex] = useState(0);
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (article.length === 0) {
      client
        .getEntries({ content_type: "post" })
        .then((resp) => {
          setArticle(resp.items);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setError(err);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [article]);

  const scrollToSection = (location) => {
    let hash = location.hash ? location.hash.slice(1) : null;
    let elem = hash ? document.getElementById(hash) : null;

    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <AppContext.Provider
      value={{
        scrollToSection,
        index,
        setIndex,
        article,
        setArticle,
        isLoading,
        setIsLoading,
        error,
        setError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
