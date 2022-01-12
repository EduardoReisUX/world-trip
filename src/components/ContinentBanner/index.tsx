import { Box, Heading, Image, Container } from "@chakra-ui/react";

export function ContinentBanner() {
  return (
    <Box
      w={"100%"}
      h={{ base: "150px", lg: "500px" }}
      mb={{ base: "24px", lg: "80px" }}
      position={"relative"}
      display={"flex"}
      alignItems={{ base: "center", lg: "flex-end" }}
      justifyContent={{ base: "center", lg: "center" }}
    >
      <Image
        position={"absolute"}
        w={"inherit"}
        h={"inherit"}
        objectFit={"cover"}
        bgColor={"gray.900"}
        sx={{ filter: "brightness(0.75)" }}
      />
      <Container
        zIndex={1}
        flex={{ base: 0, lg: 1 }}
        maxW={"container.lg"}
        mb={{ base: "0", lg: "59px" }}
      >
        <Heading
          fontSize={{ base: "1.75rem", lg: "3rem" }}
          fontWeight={"semibold"}
          color={"light.heading"}
        >
          Europa
        </Heading>
      </Container>
    </Box>
  );
}
