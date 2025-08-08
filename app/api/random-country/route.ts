import { COUNTRIES } from "../../constants/countries";
import { setCorrectCountry } from "../database";

export async function GET() {
  const country = COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
  setCorrectCountry(country);

  const { flags: flag, capital: capitalsList } = country;
  const frontendCountryInfo = {
    flag: { ...flag },
    capitalsList: [...capitalsList],
  };

  return Response.json(frontendCountryInfo);
}
