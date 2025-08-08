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
      lit: {
        official: string;
        common: string;
      };
    };
  };
  capital: string[];
};

export let correctCountry: countryType;
