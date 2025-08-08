import React, { useEffect } from "react";
import Game from "./components/Game";
import { cookies } from "next/headers";
import { getRandomCountry } from "./helpers/getRandomCountry";

export default async function Home() {
  // Set the cookie only if it doesn't exist
  const cookieStore = await cookies();
  let correctCountry = cookieStore.get("correctCountry")?.value;

  if (!correctCountry) {
    correctCountry = getRandomCountry().name.common;

    cookieStore.set("correctCountry", correctCountry, {
      httpOnly: true,
      path: "/",
    });
  }

  // Render your game UI (client component for interactivity)
  return (
    <div>
      <h1>Guess the Country Game</h1>
      {/* Render your client-side game component here */}
      <Game />
    </div>
  );
}
