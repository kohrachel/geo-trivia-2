"use client";

import React, { useState } from "react";

export type FrontendCountryType = {
  capitalsList: string[];
  flag: {
    alt: string;
    png: string;
    svg: string;
  };
};

type GameProps = {
  country: FrontendCountryType;
};

export default function Game({ country }: GameProps) {
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState("");

  const { capitalsList, flag } = country;

  const handleGuess = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // if (result === "success") return;
    setResult("");
    const res = await fetch("/api/validate-guess", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ guessedCountry: guess }),
    });
    const data = await res.json();

    console.log({ data });
    setResult(data.correctGuess ? "success" : "error");
    setGuess("");
  };
  return (
    <div className="w-full flex flex-col items-center">
      {/* Header */}
      <h1 className="w-full text-center text-2xl bg-blue-600">
        Guess the Country!
      </h1>
      <h2 className="w-full text-center bg-blue-600">
        Can you guess the country based on its capital city and flag?
      </h2>

      {/* Hints */}
      <ul className="w-full text-center">
        <h3 className="p-3 text-xl">Capital city/cities:</h3>
        {capitalsList.map((capital, index) => (
          <li key={index}>{capital}</li>
        ))}
      </ul>
      <div className="w-full text-center bg-yellow-600">
        <h3 className="p-3 text-xl">Facts:</h3>
      </div>
      <div className="flex flex-col w-full text-center items-center">
        <h3 className="p-3 text-xl">Flag:</h3>
        <div className="p-2 outline rounded-lg">
          {/* eslint-disable-next-line */}
          <img src={flag.png} alt={flag.alt} className="h-64" />
        </div>
      </div>

      {/* Input */}
      <form
        onSubmit={handleGuess}
        className="flex flex-col justify-center w-max p-3 gap-3 rounded-md outline m-5"
      >
        <label htmlFor="country-guess">Type in your guess</label>
        <div className="flex gap-3">
          <input
            id="country-guess"
            placeholder="Guess the country!"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            className="rounded-md py-1 px-3 outline"
          />
          <button className="bg-blue-600 px-3 rounded-xl">Guess</button>
        </div>
      </form>

      {/* Result */}
      {result === "success" && <p>Success!</p>}
      {result === "error" && <p>Nope! Try again :)</p>}
    </div>
  );
}
