"use client";
import React from "react";
import { getRandomCountry } from "./helpers/getRandomCountry";

export default function Home() {
  const country = getRandomCountry();
  const { capital: capitalsList, flags: flag, name } = country;

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
        <img src={flag.png} alt={flag.alt} className="h-64" />
      </div>

      {/* Input */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex justify-center"
      >
        <input placeholder="Guess the country!" />
        <button>Guess</button>
      </form>
    </div>
  );
}
