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
        display={"flex"}
        maxW={"container.lg"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <NextLink href={"/"} passHref>
          <ChakraLink>
            <ChevronLeftIcon
              w={{ base: 4, lg: 8 }}
              h={{ base: 4, lg: 8 }}
              color={"dark.heading"}
              visibility={
                route.pathname !== "/[continent]" ? "hidden" : "visible"
              }
            />
          </ChakraLink>
        </NextLink>

        <NextLink href={"/"} passHref>
          <ChakraLink>
            <Image
              src={"/images/logo.svg"}
              alt="logo"
              h={{ base: "20px", lg: "46px" }}
              px={4}
            />
          </ChakraLink>
        </NextLink>

        <ChevronLeftIcon
          w={{ base: 4, lg: 8 }}
          h={{ base: 4, lg: 8 }}
          visibility={"hidden"}
        />
      </Container>
    </Box>
  );
}
