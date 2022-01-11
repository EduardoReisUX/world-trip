import { Container, Heading } from "@chakra-ui/react";

export function Title() {
  return (
    <Container maxW={"container.lg"} textAlign={"center"}>
      <Heading
        fontSize={["20px", "20px", "20px", "36px"]}
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
