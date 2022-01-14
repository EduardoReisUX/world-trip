import { Flex, Grid, Heading, Spinner } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { CityCard } from "./CityCard";

interface CitiesProps {
  continent: string;
}

export function Cities({ continent }: CitiesProps) {
  const { data, isLoading, error } = useQuery("cities", async () => {
    const response = await fetch(`http://localhost:3000/api/continents/Europa`);
    const data = await response.json();

    const cities = data.cities.map(
      (cityItem: {
        city: string;
        country: string;
        cityImage: string;
        flag: string;
      }) => ({
        city: cityItem.city,
        country: cityItem.country,
        cityImage: cityItem.cityImage,
        flag: cityItem.flag,
      })
    );

    return cities;
  });

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

      {isLoading ? (
        <Flex justify={"center"}>
          <Spinner size={"xl"} thickness="4px" color="highlight.100" />
        </Flex>
      ) : error ? (
        <Flex justify={"center"}>
          <Heading
            fontSize={{ base: "1.25rem", lg: "2rem" }}
            fontWeight={"medium"}
            color={"dark.info"}
            mb={{ base: 5, lg: 10 }}
          >
            Falha ao obter dados das cidades. 😢
          </Heading>
        </Flex>
      ) : (
        <Grid
          templateColumns={"repeat(auto-fit, minmax(250px, 1fr))"}
          gap={{ base: 10 }}
          mb={4}
        >
          {data.map(
            (
              cityItem: {
                city: string;
                country: string;
                cityImage: string;
                flag: string;
              },
              index: number
            ) => (
              <CityCard
                key={index}
                city={cityItem.city}
                country={cityItem.country}
                cityImage={cityItem.cityImage}
                flag={cityItem.flag}
              />
            )
          )}
        </Grid>
      )}
    </>
  );
}
