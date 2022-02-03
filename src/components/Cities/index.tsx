import { Button, Flex, Grid, Heading, Spinner } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { CityCard } from "./CityCard";

interface CitiesData {
  cities: {
    city: string;
    country: string;
    cityImage: string;
    flag: string;
  }[];
}

interface CitiesProps {
  continent: string;
}

export function Cities({ continent }: CitiesProps) {
  const { data, isLoading, error, refetch } = useQuery(
    "cities",
    async () => {
      const response = await fetch(
        `http://localhost:3000/api/continents/Europa`
      );
      const data: CitiesData = await response.json();

      const cities = data.cities.map(({ city, country, cityImage, flag }) => ({
        city,
        country,
        cityImage,
        flag,
      }));

      return cities;
    },
    {
      refetchOnWindowFocus: false,
      retry: 1,
    }
  );

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
        <Flex direction={"column"} align={"center"} justify={"center"}>
          <Heading
            fontSize={{ base: "1.25rem", lg: "2rem" }}
            fontWeight={"medium"}
            color={"dark.info"}
            mb={{ base: 5, lg: 10 }}
          >
            Falha ao obter dados das cidades. 😢
          </Heading>
          <Button
            mt={4}
            bg={"highlight.50"}
            color={"dark.heading"}
            _hover={{ bg: "highlight.100", color: "light.heading" }}
            onClick={() => refetch()}
          >
            Tentar novamente
          </Button>
        </Flex>
      ) : (
        <Grid
          templateColumns={"repeat(auto-fit, minmax(250px, 1fr))"}
          gap={{ base: 10 }}
          mb={4}
        >
          {data?.map(({ city, country, cityImage, flag }, index: number) => (
            <CityCard
              key={index + country + city + cityImage + flag}
              city={city}
              country={country}
              cityImage={cityImage}
              flag={flag}
            />
          ))}
        </Grid>
      )}
    </>
  );
}
