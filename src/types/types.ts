export interface ICountry {
  population: number;
  area: number;
  region: string;
  capital: string;
  name: string;
  flag: string;
}

export interface ICountryAPI {
  flags: IFlags;
  name: IName;
  capital: string[];
  region: string;
  area: number;
  population: number;
}

interface IFlags {
  png: string;
  svg: string;
}

interface IName {
  common: string;
  official: string;
  nativeName: Record<string, INativeName | undefined>;
}

interface INativeName {
  official: string;
  common: string;
}

interface ISpa {
  official: string;
  common: string;
}
