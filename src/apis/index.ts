// Import the `useQuery` hook from the React Query library
import { useQuery } from "react-query";
// Import the necessary types and functions from the `chartsAndMapsApis` module
import {
  Case,
  CountryData,
  fetchCovidCasesByDate,
  fetchCovidDataByCountry,
} from "./chartsAndMapsApis";

// Custom hook to fetch COVID-19 data by country using the `useQuery` hook
export const useCovidDataByCountry = () => {
  // Use the `useQuery` hook with the key "covidDataByCountry" and the fetch function `fetchCovidDataByCountry`
  // The hook returns the query result with the data of type `CountryData[]` and possible errors of type `Error`
  return useQuery<CountryData[], Error>(
    "covidDataByCountry",
    fetchCovidDataByCountry
  );
};

// Custom hook to fetch COVID-19 data by date using the `useQuery` hook
export const useCovidDataByDate = () => {
  // Use the `useQuery` hook with the key "covidDataByDate" and the fetch function `fetchCovidCasesByDate`
  // The hook returns the query result with the data of type `Case[]` and possible errors of type `Error`
  return useQuery<Case[], Error>("covidDataByDate", fetchCovidCasesByDate);
};
