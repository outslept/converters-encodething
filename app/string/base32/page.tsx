"use client";

import Textarea from "@/components/Common/Textarea/textarea";

import { useState } from "react";

const BASE32_CHARACTERS: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

type Base32PageProps = {};

const Base32Page: React.FC<Base32PageProps> = () => {
  const [inputText, setInputText] = useState("");
  const [encodedValue, setEncodedValue] = useState("");
  const [decodedValue, setDecodedValue] = useState("");

  function encodeBase32(str: string): string {
    const bytes: Uint8Array = new TextEncoder().encode(str);

    let binaryString: string = "";
    for (let i = 0; i < bytes.length; i++) {
      binaryString += bytes[i].toString(2).padStart(8, "0");
    }

    let base32String: string = "";
    for (let i = 0; i < binaryString.length; i += 5) {
      const chunk: string = binaryString.slice(i, i + 5);
      const decimal: number = parseInt(chunk, 2);
      base32String += BASE32_CHARACTERS[decimal];
    }

    return base32String.padEnd(Math.ceil(base32String.length / 8) * 8, "=");
  }

  function decodeBase32(str: string): string {
    const charGroups: string[] = str.match(/.{1,8}/g) || [];

    const byteGroups: number[][] = charGroups.map((group) => {
      let value: number = 0;
      for (let i: number = 0; i < group.length; i++) {
        value |= BASE32_CHARACTERS.indexOf(group[i]) << (5 * (7 - i));
      }

      const bytes: number[] = [];
      for (let i: number = 0; i < 5; i++) {
        if ((value & 0xff) !== 0) bytes.push(value & 0xff);
        value >>= 8;
      }

      return bytes;
    });

    const bytes: number[] = byteGroups.reduce(
      (allBytes: number[], group: number[]) => allBytes.concat(group),
      []
    );

    return new TextDecoder().decode(Uint8Array.from(bytes));
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = e.target.value;
    setInputText(input);
    setEncodedValue(encodeBase32(input));
    setDecodedValue(decodeBase32(input));
  };

  return (
    <>
      <main className="container">
        <section>
          <div>
            <div>
              <Textarea
                placeholder='Enter the text to be converted. (e.g. "Hello, world!" <=> "JBSWY3DPFQQHO33SNRSCC===")'
                className="mt-3"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </section>

        <section>
          <p>Decoded: {decodedValue}</p>
          <p>Encoded: {encodedValue}</p>
        </section>
      </main>
    </>
  );
};

export default Base32Page;
