"use client";
import React from "react";
import useCapitalize from "@/hook/useCapitalize";
import Textarea from "@/components/Common/Textarea/textarea";

const Page = () => {
  const { capitalize, convertToCapitalize } = useCapitalize();
  const [inputText, setInputText] = React.useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setInputText(newText);
    convertToCapitalize(newText);
  };

  return (
    <div>
      <Textarea
        value={inputText}
        onChange={handleInputChange}
        rows={5}
        cols={50}
      ></Textarea>
      <p>{capitalize}</p>
    </div>
  );
};

export default Page;
