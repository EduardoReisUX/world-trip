import { Grid, Heading } from "@chakra-ui/react";
import { CityCard } from "./CityCard";

export function Cities() {
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
