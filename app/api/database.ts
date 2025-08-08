export type countryType = {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]:
        | {
            official: string;
            common: string;
          }
        | undefined;
    };
  };
  capital: string[];
};

let correctCountry: countryType;

export const setCorrectCountry = (country: countryType) => {
  correctCountry = country;
};

export const getCorrectCountry = () => {
  return correctCountry;
};
