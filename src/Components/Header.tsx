import React from "react";
import classes from "./Header.module.css";
import logo from "../assets/logo.png";
import Editor from "./Editor";
import { useContext } from "react";
import { DataContext } from "../store/DataProvider";

const Header = () => {
  const { html, css, js, setHTML, setCSS, setJavaScript } =
    useContext(DataContext);

  return (
    <>
      <div className={classes.main}>
        <img src={logo} alt="logo" className={classes.image} />
        <span className={classes.Editor}>
          <Editor
            language="xml"
            title="HTML"
            value={html}
            onChange={(value) => {
              setHTML(value);
            }}
            icon="/"
            color="#FF3C41"
          />
          <Editor
            language="css"
            title="CSS"
            value={css}
            onChange={(value) => {
              setCSS(value);
            }}
            icon="*"
            color="#0EBEFF"
          />
          <Editor
            language="javascript"
            title="js"
            value={js}
            onChange={(value) => {
              setJavaScript(value);
            }}
            icon="( )"
            color="#FCD000"
          />
        </span>
      </div>
    </>
  );
};

export default Header;
