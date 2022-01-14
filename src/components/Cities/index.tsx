import { Grid, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { CityCard } from "./CityCard";

interface CitiesProps {
  continent: string;
}

type CitiesData = {
  city: "Londres";
  country: "Reino Unido";
  cityImage: "londres";
  flag: "reino-unido";
};

export function Cities({ continent }: CitiesProps) {
  let [cities, setCities] = useState<CitiesData[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/continents/${continent}`)
      .then((res) => res.json())
      .then((json) => {
        setCities(json.cities);
      });

    console.log(cities);
  }, []);

  return (
    <>
      <Heading
        fontSize={{ base: "1.5rem", lg: "2.25rem" }}
        fontWeight={"medium"}
        color={"dark.heading"}
        mb={{ base: 5, lg: 10 }}
      >
        Cidades +100
      </Heading>
      <Grid
        templateColumns={"repeat(auto-fit, minmax(250px, 1fr))"}
        gap={{ base: 10 }}
        mb={4}
      >
        {cities.map(({ city, country, cityImage, flag }, index) => (
          <CityCard
            key={index}
            city={city}
            country={country}
            cityImage={cityImage}
            flag={flag}
          />
        ))}
      </Grid>
    </>
  );
}
