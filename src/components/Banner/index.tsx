import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export function Banner() {
  return (
    <Box
      bgImage={"/images/background.png"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      pt={{ base: 7, lg: 20 }}
      pb={{ base: 7, lg: 0 }}
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
              width={{ base: "100%", lg: "75%" }}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Stack>
          <Image
            display={{ base: "none", lg: "block" }}
            src={"/images/airplane.svg"}
            alt=""
            transform={"translateY(32px)"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
