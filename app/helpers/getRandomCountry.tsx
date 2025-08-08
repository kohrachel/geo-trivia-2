import { COUNTRIES } from "../constants/countries";

export const getRandomCountry = () => {
  return COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
};
