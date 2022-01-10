import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex alignItems={"center"} justifyContent={"center"} width={"100%"} p={8}>
      <Image src={"/images/logo.svg"} alt="logo" />
    </Flex>
  );
}
