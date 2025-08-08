import { COUNTRIES } from "../../constants/countries";

export async function GET() {
  return Response.json(COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)]);
}
