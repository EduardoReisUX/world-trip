import { Stack, Heading, Text, Image } from "@chakra-ui/react";
import NextLink from "next/link";

interface SlideItemProps {
  image?: string;
  title: string;
  text: string;
}

export function SlideItem({ image, title, text }: SlideItemProps) {
  return (
    <NextLink href={`/${title}`} passHref>
      <Stack
        position={"relative"}
        spacing={3}
        align={"center"}
        justify={"center"}
        direction={"column"}
        bgColor={"purple.900"}
        w={"inherit"}
        h={"inherit"}
        _hover={{ cursor: "pointer" }}
      >
        {!!image && (
          <Image
            position={"absolute"}
            top={0}
            src={`images/${image}`}
            objectFit={"cover"}
            w={"inherit"}
            h={"inherit"}
            sx={{ filter: "brightness(0.75)" }}
          />
        )}
        <Heading
          fontSize={{ base: "1.5rem", lg: "2.5rem" }}
          fontWeight={"bold"}
          color={"light.heading"}
          zIndex={1}
        >
          {title}
        </Heading>
        <Text
          fontSize={{ base: "0.875rem", lg: "1.5rem" }}
          fontWeight={"bold"}
          color={"light.info"}
          zIndex={1}
        >
          {text}
        </Text>
      </Stack>
    </NextLink>
  );
}
