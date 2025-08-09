"use client";

import React from "react";
import Game from "./components/Game";
import useSWR from "swr";

export default function Home() {
  const { data, error, isLoading } = useSWR(
    `/api/random-country`,
    countryFetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log("country", data);

  const gameCountry = data;

  return (
    <div>
      <Game country={gameCountry} />
    </div>
  );
}

const countryFetcher = async (endpoint: string) => {
  const response = await fetch(endpoint);
  const json = await response.json();

  return json;
};
