"use client";

import React, { useEffect, useState } from "react";
import { getRandomCountry } from "../helpers/getRandomCountry";

type FrontendCountryType = {
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

  const handleGuess = async (event) => {
    event.preventDefault();
    console.log("in handleGuess function");
    const res = await fetch("/api/validate-guess", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ guessedCountry: guess }),
    });
    const data = await res.json();

    console.log({ data });
    setResult(data.correct ? "success" : "");
  };

  //   useEffect(() => {
  //     (async () => {
  //       // const data = await fetch("/api/random-country");
  //       // const post = await data.json();

  //       // console.log("posts: ", post);

  //       const res = await fetch("/api/validate-guess", {
  //         method: "POST",
  //         body: JSON.stringify({
  //           guessedCountry: "Singapore",
  //         }),
  //       });

  //       const data = await res.json();
  //       console.log("response: ", data);
  //     })();
  //   }, []);

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
    </div>
  );
}
