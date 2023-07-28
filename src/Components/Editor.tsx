import React from "react";
import classes from "./Editor.module.css";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import { useState } from "react";

require("codemirror/mode/javascript/javascript");
require("codemirror/mode/xml/xml");
require("codemirror/mode/css/css");
const Editor: React.FC<{
  title: string;
  language: string;
  value: string;
  onChange: (value: string) => void;
  icon: string;
  color: string;
}> = (props) => {
  const [tempValue, setTempValue] = useState("");
  const { title, language, value, onChange, icon, color } = props;

  return (
    <div className={classes.main}>
      <span className={classes.header}>
        <p className={classes.logo}>{icon}</p>
        <p className={classes.title}>{title}</p>
      </span>
      <CodeMirror
        value={value}
        onBeforeChange={(editor, data, value) => {
          onChange(value);
        }}
        onChange={(editor, data, value) => {
          // setTempValue(value);
        }}
        className="controlled-editor"
        options={{
          mode: language,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </div>
  );
};

export default Editor;
