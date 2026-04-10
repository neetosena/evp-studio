import React, { useContext, useEffect, useState } from "react";
import client from "./ContentfulClient";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [index, setIndex] = useState(0);
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const space = process.env.REACT_APP_SPACE;
  const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
  const environment = process.env.REACT_APP_ENVIRONMENT;
  const query = `
    query {
    assetCursorCollection{
  items {
    contentType
    description
    fileName
    height
    size
    title
    url
    width
  }
}
  }
  
  `;

  const fetchData = async () => {
    try {
      const resp = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${space}/environments/${environment}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ query }),
        },
      );
      if (!resp.ok) {
        throw new Error(`Failed to access ${resp.status}`);
      } else {
        const json = await resp.json();
        console.log(json);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
    if (article.length === 0) {
      client
        .getEntries({ content_type: "post" })
        .then((resp) => {
          setArticle(resp.items);
          setIsLoading(false);
          console.log("testing", resp.items);
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
