import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export function Banner() {
  const isDesktopVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      bgImage={"/images/background.png"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      pt={isDesktopVersion ? 20 : 7}
      pb={isDesktopVersion ? 0 : 7}
    >
      <Container maxW={"container.lg"}>
        <Flex justifyContent={"space-between"}>
          <Stack direction={"column"} spacing={"20px"}>
            <Heading
              fontSize={["1.25rem", "1.5rem"]}
              fontWeight={"medium"}
              color={"light.heading"}
            >
              5 Continentes,
              <br />
              infinitas possibilidades.
            </Heading>
            <Text
              fontSize={["0.875rem", "1.25rem"]}
              fontWeight={"regular"}
              color={"light.info"}
              width={isDesktopVersion ? "75%" : "100%"}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Stack>
          {isDesktopVersion && (
            <Image
              src={"/images/airplane.svg"}
              transform={"translateY(32px)"}
            />
          )}
        </Flex>
      </Container>
    </Box>
  );
}
