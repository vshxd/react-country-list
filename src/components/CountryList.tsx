import React from "react";
import { ICountry } from "../types/types";
import { CountryItem } from "./CountryItem";

interface ICountryList {
  countries: ICountry[];
}

export const CountryList = ({ countries }: ICountryList) => {
  return (
    <ul className="list-group d-flex">
      {countries.map((country) => (
        <CountryItem key={country.name} country={country} />
      ))}
    </ul>
  );
};

export default CountryList;
