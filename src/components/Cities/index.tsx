import { Grid, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { CityCard } from "./CityCard";

interface CitiesProps {
  continent: string;
}

export function Cities({ continent }: CitiesProps) {
  let [cities, setCities] = useState([]);

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
        {/* cities.map() */}
        <CityCard
          city="Londres"
          country="Reino Unido"
          cityImage="londres"
          flag="reino-unido"
        />
        <CityCard
          city="Paris"
          country="França"
          cityImage="paris"
          flag="franca"
        />
        <CityCard city="Roma" country="Itália" cityImage="roma" flag="italia" />
        <CityCard
          city="Praga"
          country="República Tcheca"
          cityImage="praga"
          flag="republica-tcheca"
        />
        <CityCard
          city="Amsterdã"
          country="Holanda"
          cityImage="amsterda"
          flag="holanda"
        />
      </Grid>
    </>
  );
}
