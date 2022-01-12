import { Divider as ChakraDivider } from "@chakra-ui/react";

export function Divider() {
  return (
    <ChakraDivider
      mx={"auto"}
      mb={["24px", "24px", "24px", "52px"]}
      w={["60px", "60px", "60px", "80px"]}
      borderBottom={"2px"}
      borderColor={"dark.heading"}
    />
  );
}
