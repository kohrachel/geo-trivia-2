// { guessedCountry: string }
import { correctCountry } from "../database";

export async function POST(req: Request) {
  const { guessedCountry } = await req.json();
  const guessedCountryLower = JSON.stringify(guessedCountry).toLowerCase();
  const correctCountryLower = correctCountry.toLowerCase();

  const correct = guessedCountryLower.includes(correctCountryLower);
  return Response.json({ correctGuess: correct });
}
