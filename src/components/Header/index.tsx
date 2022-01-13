import {
  Box,
  Container,
  Flex,
  Icon,
  Image,
  Link as ChakraLink,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

import { ChevronLeftIcon } from "@chakra-ui/icons";

export function Header() {
  const route = useRouter();

  return (
    <Box width={"100%"} py={{ base: 4, lg: 8 }}>
      <Container
        maxW={"container.lg"}
        display={"grid"}
        gridTemplateColumns={"repeat(3, 1fr)"}
        alignItems={"center"}
      >
        {route.pathname === "/[continent]" && (
          <NextLink href={"/"} passHref>
            <ChakraLink w={{ base: 4, lg: 8 }} h={{ base: 4, lg: 8 }}>
              <ChevronLeftIcon
                w={"inherit"}
                h={"inherit"}
                color={"dark.heading"}
              />
            </ChakraLink>
          </NextLink>
        )}

        <NextLink href={"/"} passHref>
          <ChakraLink justifySelf={"center"} gridColumn={2}>
            <Image
              src={"/images/logo.svg"}
              alt="logo"
              h={{ base: "20px", lg: "46px" }}
              px={4}
            />
          </ChakraLink>
        </NextLink>
      </Container>
    </Box>
  );
}
