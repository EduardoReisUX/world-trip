import { Container, Heading } from "@chakra-ui/react";

export function Title() {
  return (
    <Container maxW={"container.lg"} textAlign={"center"}>
      <Heading
        fontSize={{ base: "20px", lg: "36px" }}
        fontWeight={"medium"}
        color={"dark.heading"}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>
    </Container>
  );
}
