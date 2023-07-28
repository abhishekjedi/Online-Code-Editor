import React from "react";
import classes from "./Output.module.css";
import { DataContext } from "../store/DataProvider";
import { useContext, useState, useEffect } from "react";

const Output = () => {
  const { html, css, js } = useContext(DataContext);
  const [src, setSrc] = useState("");

  useEffect(() => {
    const srcCode = `
  <html>
  <body>${html}</body>
  <script>${js}</script>
  <style>${css}</style>
  </html>
  `;
    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 500);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <iframe
      srcDoc={src}
      title="Output"
      sandbox="allow-scripts"
      width="100%"
      height="100%"
      className={classes.frame}
    />
  );
};

export default Output;
