import {
  Box,
  Heading,
  Text,
  Image,
  Stack,
  Flex,
  AspectRatio,
  Link as ChakraLink,
} from "@chakra-ui/react";
import NextLink from "next/link";

interface CityCardProps {
  cityImage: string;
  city: string;
  country: string;
  flag?: string;
}

export function CityCard({ cityImage, city, country, flag }: CityCardProps) {
  return (
    <NextLink href="/" passHref>
      <ChakraLink>
        <Box>
          <AspectRatio maxW={"auto"} ratio={37 / 25}>
            <Image
              src={`images/cities/${cityImage}.png`}
              alt={`Imagem de ${city}`}
              position={"absolute"}
              w={"inherit"}
              h={"inherit"}
              objectFit={"cover"}
              bgColor={"gray.700"}
              borderTopRadius={8}
            />
          </AspectRatio>
          <Flex
            p={6}
            bgColor={"light.white"}
            borderWidth={1}
            borderRightColor={"highlight.50"}
            borderLeftColor={"highlight.50"}
            borderBottomColor={"highlight.50"}
            borderBottomRadius={8}
            align={"center"}
            justify={"space-between"}
          >
            <Stack>
              <Heading
                fontSize={"1.25rem"}
                fontWeight={"semibold"}
                color={"dark.heading"}
              >
                {city}
              </Heading>
              <Text fontSize={"1rem"} fontWeight={"medium"} color={"dark.info"}>
                {country}
              </Text>
            </Stack>

            <Image
              src={`images/flags/${flag}.png`}
              alt={`Bandeira de ${country}`}
              objectFit={"cover"}
              bgColor={"gray.700"}
              w={"30px"}
              h={"30px"}
              rounded={"full"}
            />
          </Flex>
        </Box>
      </ChakraLink>
    </NextLink>
  );
}
