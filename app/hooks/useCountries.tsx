"use client";
import useSWR from "swr";

const fetchCountries = async (COUNTRIES_URL: string) => {
  const response = await fetch(COUNTRIES_URL);
  const json = await response.json();
  return json;
};

export const useCountries = () => {
  const REST_COUNTRIES_URL =
    "https://restcountries.com/v3.1/all?fields=name,flags,capital";
  const { data, error, isLoading } = useSWR(REST_COUNTRIES_URL, fetchCountries);

  return { data, error, isLoading };
};
