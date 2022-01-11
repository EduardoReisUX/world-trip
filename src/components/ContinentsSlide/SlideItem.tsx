import { Stack, Heading, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

interface SlideItemProps {
  title: string;
  text: string;
}

export function SlideItem({ title, text }: SlideItemProps) {
  return (
    <NextLink href={`/${title}`} passHref>
      <Stack
        as="a"
        spacing={3}
        align={"center"}
        justify={"center"}
        direction={"column"}
        bgColor={"purple.900"}
        w={"inherit"}
        h={"inherit"}
      >
        <Heading
          fontSize={{ base: "1.5rem", lg: "2.5rem" }}
          fontWeight={"bold"}
          color={"light.heading"}
        >
          {title}
        </Heading>
        <Text
          fontSize={{ base: "0.875rem", lg: "1.5rem" }}
          fontWeight={"bold"}
          color={"light.info"}
        >
          {text}
        </Text>
      </Stack>
    </NextLink>
  );
}
