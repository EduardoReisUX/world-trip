import { Container, Flex, Grid, useBreakpointValue } from "@chakra-ui/react";
import { TravelTypeItem } from "./TravelTypeItem";

export function TravelTypes() {
  const isDesktopVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Container maxW={"container.lg"} py={isDesktopVersion ? 20 : 9}>
        {isDesktopVersion ? (
          <Flex justifyContent={"space-between"}>
            <TravelTypeItem
              isDesktopVersion={isDesktopVersion}
              image="cocktail-1.svg"
              text="vida noturna"
            />
            <TravelTypeItem
              isDesktopVersion={isDesktopVersion}
              image="surf-1.svg"
              text="praia"
            />
            <TravelTypeItem
              isDesktopVersion={isDesktopVersion}
              image="building-1.svg"
              text="moderno"
            />
            <TravelTypeItem
              isDesktopVersion={isDesktopVersion}
              image="museum-1.svg"
              text="clássico"
            />
            <TravelTypeItem
              isDesktopVersion={isDesktopVersion}
              image="earth-1.svg"
              text="e mais..."
            />
          </Flex>
        ) : (
          <Grid
            templateColumns={"repeat(auto-fit, minmax(110px, 1fr))"}
            rowGap={4}
            columnGap={2}
          >
            <TravelTypeItem
              isDesktopVersion={isDesktopVersion}
              image="cocktail-1.svg"
              text="vida noturna"
            />
            <TravelTypeItem
              isDesktopVersion={isDesktopVersion}
              image="surf-1.svg"
              text="praia"
            />
            <TravelTypeItem
              isDesktopVersion={isDesktopVersion}
              image="building-1.svg"
              text="moderno"
            />
            <TravelTypeItem
              isDesktopVersion={isDesktopVersion}
              image="museum-1.svg"
              text="clássico"
            />
            <TravelTypeItem
              isDesktopVersion={isDesktopVersion}
              image="earth-1.svg"
              text="e mais..."
            />
          </Grid>
        )}
      </Container>
    </>
  );
}
