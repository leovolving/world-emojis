"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import { countries } from "../data/countries";
import { C } from "../types/country";

import Country from "./Country";

export default function Lookup() {
  const [inputValue, setInputValue] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<C | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setErrorMessage("");
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue.length === 2) {
      setSelectedCountry(null);
      const country = countries.find(
        (c) => c.cca2.toLowerCase() === inputValue.toLocaleLowerCase()
      );
      if (country) {
        setSelectedCountry(country);
      } else {
        setErrorMessage("No country found");
      }
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="code-input">Enter a 2-character country code</label>
        <input
          type="text"
          onChange={onChange}
          value={inputValue}
          maxLength={2}
          id="code-input"
        />
        <input type="submit" value="Search" />
        {errorMessage && <aside>{errorMessage}</aside>}
      </form>

      {selectedCountry && <Country country={selectedCountry} />}
    </div>
  );
}
