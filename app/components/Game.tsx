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
    <div>
      {/* Header */}
      <h1 className="w-full text-center bg-blue-600">Guess the Country!</h1>
      <h2 className="w-full text-center bg-blue-600">
        Can you guess the country based on its capital city and flag?
      </h2>

      {/* Hints */}
      <ul className="w-full text-center bg-yellow-600">
        Capital city/cities:{" "}
        {capitalsList.map((capital, index) => (
          <li key={index}>{capital}</li>
        ))}
      </ul>
      <div className="w-full text-center bg-yellow-600">Facts: </div>
      <div className="flex flex-col w-full text-center items-center bg-yellow-600">
        Flag:
        {/* eslint-disable-next-line */}
        <img src={flag.png} alt={flag.alt} className="h-64" />
      </div>

      {/* Input */}
      <form onSubmit={handleGuess} className="flex justify-center">
        <input
          placeholder="Guess the country!"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button>Guess</button>
      </form>

      {/* Result */}
      {result === "success" && <p>Success!</p>}
      {result === "error" && <p>Nope! Try again :)</p>}
    </div>
  );
}
