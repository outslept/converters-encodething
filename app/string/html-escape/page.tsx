"use client";
import useHTMLEscape from "@/hook/useHTMLEscape";
import React from "react";

const HTMLEscapeTest = () => {
  const [inputText, setInputText] = React.useState("");
  const { escapedText, unescape } = useHTMLEscape(inputText);

  return (
    <div>
      <h2>HTML Escape Test</h2>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to escape/unescape"
      />
      <h3>Escaped Text:</h3>
      <pre>{escapedText}</pre>
      <h3>Unescaped Text:</h3>
      <pre>{unescape()}</pre>
    </div>
  );
};

export default HTMLEscapeTest;
