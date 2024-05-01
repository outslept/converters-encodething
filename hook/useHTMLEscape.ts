import { useEffect, useState } from "react";

/**
 * Custom hook to escape HTML entities in the given text.
 * @param text - The input text to escape.
 * @returns An object containing the escaped text and a function to unescape it.
 */
const useHTMLEscape = (text: string) => {
  const [escapedText, setEscapedText] = useState("");

  useEffect(() => {
    if (!text) {
      return;
    }

    // Escape HTML entities
    // TODO: ADD Other HTML entities
    const escaped = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

    setEscapedText(escaped);
  }, [text]);

  /**
   * Function to unescape the previously escaped text.
   * @returns The unescaped text.
   */
  const unescape = () => {
    return escapedText
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'");
  };

  return { escapedText, unescape };
};

export default useHTMLEscape;
