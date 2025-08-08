import { getCorrectCountry } from "../database";

export async function GET() {
  return Response.json(getCorrectCountry());
}
