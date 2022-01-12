import {
  Box,
  Heading,
  Text,
  Image,
  Stack,
  Flex,
  AspectRatio,
} from "@chakra-ui/react";

export function CityCard() {
  return (
    <Box>
      <AspectRatio maxW={"auto"} ratio={37 / 25}>
        <Image bgColor={"gray.700"} borderTopRadius={8} />
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
            Londres
          </Heading>
          <Text fontSize={"1rem"} fontWeight={"medium"} color={"dark.info"}>
            Reino Unido
          </Text>
        </Stack>

        <Image w={"30px"} h={"30px"} rounded={"full"} bgColor={"gray.700"} />
      </Flex>
    </Box>
  );
}
