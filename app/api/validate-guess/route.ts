import { getCorrectCountry } from "../database";

export async function POST(req: Request) {
  const { guessedCountry } = await req.json();
  const guessedCountryLower = JSON.stringify(guessedCountry).toLowerCase();
  const correctCountryLower = getCorrectCountry().name.common.toLowerCase();

  const correct = guessedCountryLower.includes(correctCountryLower);
  return Response.json({ correctGuess: correct });
}
