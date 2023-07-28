// Importing the endpoint URLs for fetching COVID-19 data for charts and maps
import { CASES_BY_COUNTRY, CASES_BY_DATE } from "./endpoints";

// Defining the interface for CountryData, representing COVID-19 data for a specific country
export interface CountryData {
  country: string;
  countryInfo: {
    _id: number;
    lat: number;
    long: number;
    flag: string;
  };
  deaths: number;
  recovered: number;
  active: number;
}

// Defining the interface for Case, representing COVID-19 cases data for a specific date
export interface Case {
  date: string;
  cases: number;
}

// Function to fetch COVID-19 data for all countries
export const fetchCovidDataByCountry = async (): Promise<CountryData[]> => {
  // Sending a GET request to the CASES_BY_COUNTRY endpoint
  const response = await fetch(CASES_BY_COUNTRY);
  // Checking if the response is successful
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  // Parsing the response data as JSON
  const data = await response.json();
  // Returning the data containing COVID-19 statistics for all countries
  return data;
};

// Function to fetch historical COVID-19 cases data
export const fetchCovidCasesByDate = async (): Promise<Case[]> => {
  // Sending a GET request to the CASES_BY_DATE endpoint
  const response = await fetch(CASES_BY_DATE);
  // Checking if the response is successful
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  // Parsing the response data as JSON
  const data = await response.json();

  // Converting the data object with date-cases pairs into an array of Case objects
  const casesArray = Object.entries(data.cases).map(([date, cases]) => ({
    date,
    cases: cases as number,
  }));

  // Returning the array of Case objects representing COVID-19 cases for each date
  return casesArray;
};
