import { Heading, Text } from "@chakra-ui/react";

interface InfoItemProps {
  heading: string;
  text: string;
}

export function InfoItem({ heading, text }: InfoItemProps) {
  return (
    <Heading
      fontSize={"1.5rem"}
      fontWeight={"semibold"}
      color={"highlight.100"}
    >
      {heading}
      <br />
      <Text
        fontSize={"1.125rem"}
        fontWeight={{ base: "normal", lg: "semibold" }}
        color={"dark.heading"}
      >
        {text}
      </Text>
    </Heading>
  );
}
