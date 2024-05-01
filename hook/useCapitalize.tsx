import { useState } from "react";

// Custom hook to capitalize the input string
const useCapitalize = () => {
  const [capitalize, setCapitalize] = useState("");

  /**
   * Function to convert the input string to capitalized format
   * @param {string} str - The input string to be capitalized
   */
  const convertToCapitalize = (str: string) => {
    setCapitalize(
      str
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ")
    );
  };

  return { capitalize, convertToCapitalize };
};

export default useCapitalize;
