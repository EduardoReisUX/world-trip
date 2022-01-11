import { Stack, Heading, Text, Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

interface SlideItemProps {
  title: string;
  text: string;
  isDesktopVersion: boolean | undefined;
}

export function SlideItem({ title, text, isDesktopVersion }: SlideItemProps) {
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
          fontSize={isDesktopVersion ? "2.5rem" : "1.5rem"}
          fontWeight={"bold"}
          color={"light.heading"}
        >
          {title}
        </Heading>
        <Text
          fontSize={isDesktopVersion ? "1.5rem" : "0.875rem"}
          fontWeight={"bold"}
          color={"light.info"}
        >
          {text}
        </Text>
      </Stack>
    </NextLink>
  );
}
