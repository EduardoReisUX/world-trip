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
        {Array(12)
          .fill(0)
          .map((item, index) => (
            <CityCard key={index} />
          ))}
      </Grid>
    </>
  );
}
