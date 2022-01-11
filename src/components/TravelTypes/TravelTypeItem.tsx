import { Heading, Image, Stack } from "@chakra-ui/react";

interface TravelTypeItemProps {
  image: string;
  text: string;
}

export function TravelTypeItem({ image, text }: TravelTypeItemProps) {
  return (
    <Stack spacing={1.5} align={"center"} justify={"center"}>
      <Image
        display={{ base: "none", lg: "block" }}
        src={`images/${image}`}
        alt={`${image}`}
        width={"75px"}
        height={"75px"}
      />
      <Heading
        fontSize={{ base: "1.125rem", lg: "1.5rem" }}
        fontWeight={"semibold"}
        color={"dark.heading"}
      >
        {text}
      </Heading>
    </Stack>
  );
}
