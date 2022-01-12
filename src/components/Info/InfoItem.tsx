import { Heading, Text } from "@chakra-ui/react";

interface InfoItemProps {
  heading: string;
  text: string;
}

export function InfoItem({ heading, text }: InfoItemProps) {
  return (
    <Heading
      fontSize={{ base: "1.5rem", lg: "3rem" }}
      fontWeight={"semibold"}
      color={"highlight.100"}
    >
      {heading}
      <br />
      <Text
        fontSize={{ base: "1.125rem", lg: "1.5rem" }}
        fontWeight={{ base: "normal", lg: "semibold" }}
        color={"dark.heading"}
      >
        {text}
      </Text>
    </Heading>
  );
}
