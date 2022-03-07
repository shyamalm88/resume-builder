import React, { useState } from "react";
import { Editor } from "primereact/editor";

const QuillEditor = (props) => {
  const changeHandler = (value) => {
    props.updateQuillData(value);
  };
  const format = (
    <span className="ql-formats">
      <button className="ql-bold" aria-label="Bold"></button>
      <button className="ql-italic" aria-label="Italic"></button>
      <button className="ql-underline" aria-label="Underline"></button>
      <span className="ql-format-separator"></span>
      <button
        className="ql-list"
        value="ordered"
        aria-label="Ordered List"
      ></button>
      <button
        className="ql-list"
        value="bullet"
        aria-label="Unordered List"
      ></button>
    </span>
  );
  return (
    <Editor
      style={{ height: "200px", marginBottom: "20px" }}
      value={props.value}
      onTextChange={(e) => changeHandler(e.htmlValue)}
      headerTemplate={format}
    />
  );
};

export default QuillEditor;
