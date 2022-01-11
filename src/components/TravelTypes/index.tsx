import { Container, Flex } from "@chakra-ui/react";
import { TravelTypeItem } from "./TravelTypeItem";

export function TravelTypes() {
  return (
    <Container maxW={"container.lg"} py={{ base: "9", lg: "20" }}>
      <Flex justifyContent={"space-between"} flexWrap={"wrap"} gap={6}>
        <TravelTypeItem image="cocktail-1.svg" text="vida noturna" />
        <TravelTypeItem image="surf-1.svg" text="praia" />
        <TravelTypeItem image="building-1.svg" text="moderno" />
        <TravelTypeItem image="museum-1.svg" text="clássico" />
        <TravelTypeItem image="earth-1.svg" text="e mais..." />
      </Flex>
    </Container>
  );
}
