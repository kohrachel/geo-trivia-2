"use client";

import React, { useEffect } from "react";
import { getRandomCountry } from "./helpers/getRandomCountry";
import { getCorrectCountry } from "./api/database";

export default function Home() {
  const country = getRandomCountry();
  const correct = getCorrectCountry();

  useEffect(() => {
    setInterval(() => {
      console.log({ correct });
    }, 3000);
  });
  const { capital: capitalsList, flags: flag, name } = country;

  useEffect(() => {
    (async () => {
      // const data = await fetch("/api/random-country");
      // const post = await data.json();

      // console.log("posts: ", post);

      const res = await fetch("/api/validate-guess", {
        method: "POST",
        body: JSON.stringify({
          guessedCountry: "Singapore",
        }),
      });

      const data = await res.json();
      console.log("response: ", data);
    })();
  }, []);

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
