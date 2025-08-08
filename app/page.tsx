"use client";

import React, { useEffect } from "react";
import Game from "./components/Game";
import { cookies } from "next/headers";
import { getRandomCountry } from "./helpers/getRandomCountry";
import useSWR from "swr";

export default function Home() {
  // Set the cookie only if it doesn't exist
  // const cookieStore = await cookies();
  // let correctCountry = cookieStore.get("correctCountry")?.value;

  // if (!correctCountry) {
  //   correctCountry = getRandomCountry().name.common;

  //   cookieStore.set("correctCountry", correctCountry, {
  //     path: "/",
  //   });
  // }
  const { data, error, isLoading } = useSWR(
    `/api/random-country`,
    countryFetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const gameCountry = {
    flag: {
      png: "https://flagcdn.com/w320/md.png",
      svg: "https://flagcdn.com/md.svg",
      alt: "The flag of Moldova is composed of three equal vertical bands of blue, yellow and red, with the national coat of arms centered in the yellow band.",
    },
    capitalsList: ["Chișinău"],
  };

  return (
    <div>
      <h1>Guess the Country Game</h1>
      <Game country={gameCountry} />
    </div>
  );
}

const countryFetcher = async (endpoint: string) => {
  const response = await fetch(endpoint);
  const json = await response.json();

  return json;
};
