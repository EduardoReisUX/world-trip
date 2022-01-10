import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";

export function Header() {
  const isDestkopVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      py={isDestkopVersion ? 8 : 4}
    >
      <Image
        src={"/images/logo.svg"}
        alt="logo"
        h={isDestkopVersion ? "46px" : "20px"}
      />
    </Flex>
  );
}
