import { Copy, Tick } from '../../Icon/icons';
import React, { useState } from 'react';

export default function Snippet({ text }: { text: string }) {
  const [copiedText, setCopiedText] = React.useState(text);
  const [buttonText, setButtonText] = React.useState('Copy');

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setButtonText('Tick');
  };

  return (
    <>
      <div>
        <div>{text}</div>
        <div onClick={handleCopy}>
          <Copy />
        </div>
      </div>
    </>
  );
}
