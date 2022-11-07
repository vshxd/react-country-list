import { Color } from "../types/colors";
import { ICountry } from "../types/types";
import { Badge } from "./Badge";

interface ICountryItem {
  country: ICountry;
}

export const CountryItem = ({
  country: { area, population, name, flag, capital, region },
}: ICountryItem) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <img src={flag} alt="flag" className="rounded float-start  col-1" />
      <p className={`m-0 fs-5 col-2 text-${Color.Success}`}>{name}</p>
      <p className={`m-0 fs-5 col-2 text-${Color.Info}`}>{capital}</p>
      <p className={`m-0 fs-5 col-1 text-${Color.Warning}`}>{region}</p>
      <Badge label="area" count={area} color={Color.Primary} />
      <Badge label="population" count={population} color={Color.Secondary} />
    </li>
  );
};
