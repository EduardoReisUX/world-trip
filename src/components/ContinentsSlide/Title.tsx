import { Container, Heading, useBreakpointValue } from "@chakra-ui/react";

export function Title() {
  const isDesktopVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Container
        maxW={isDesktopVersion ? "container.lg" : ""}
        textAlign={"center"}
      >
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
    </>
  );
}
