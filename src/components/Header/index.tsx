import { Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

export function Header() {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      py={{ base: 4, lg: 8 }}
    >
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
    </Flex>
  );
}
