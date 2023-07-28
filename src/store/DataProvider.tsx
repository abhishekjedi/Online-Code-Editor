import { createContext, useState, ReactNode, useCallback } from "react";

interface code {
  js: string;
  html: string;
  css: string;
  setJavaScript: (value: string) => void;
  setHTML: (value: string) => void;
  setCSS: (value: string) => void;
}

const initalState: code = {
  js: "",
  html: "",
  css: "",
  setCSS: (value = "") => {},
  setHTML: (value = "") => {},
  setJavaScript: (value = "") => {},
};

export const DataContext = createContext<code>(initalState);

const DataProvider: React.FC<{
  children: ReactNode;
}> = (props) => {
  const [html, setHtml] = useState("");
  const [js, setJs] = useState("");
  const [css, setCss] = useState("");

  const setJavaScript = useCallback((value: string) => {
    setJs(value);
  }, []);

  const setHTML = useCallback((value: string) => {
    setHtml(value);
  }, []);

  const setCSS = useCallback((value: string) => {
    setCss(value);
  }, []);

  return (
    <DataContext.Provider
      value={{
        html,
        setHTML,
        css,
        setCSS,
        js,
        setJavaScript,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
