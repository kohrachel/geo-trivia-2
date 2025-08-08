import { COUNTRIES } from "../../constants/countries";
import { setCorrectCountry } from "../database";

export async function GET() {
  const country = COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
  setCorrectCountry(country);

  return Response.json(country);
}
