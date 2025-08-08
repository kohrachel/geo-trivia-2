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

let correctCountry: countryType = {
  flags: {
    png: "https://flagcdn.com/w320/my.png",
    svg: "https://flagcdn.com/my.svg",
    alt: "The flag of Malaysia is composed of fourteen equal horizontal bands of red alternating with white. A blue rectangle, bearing a fly-side facing yellow crescent and a fourteen-pointed yellow star placed just outside the crescent opening, is superimposed in the canton.",
  },
  name: {
    common: "Malaysia",
    official: "Malaysia",
    nativeName: {
      eng: {
        official: "Malaysia",
        common: "Malaysia",
      },
      msa: {
        official: "مليسيا",
        common: "مليسيا",
      },
    },
  },
  capital: ["Kuala Lumpur"],
};

export const setCorrectCountry = (country: countryType) => {
  correctCountry = country;
};

export const getCorrectCountry = () => {
  return correctCountry;
};
