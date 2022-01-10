import { GridItem, Heading, Image, Stack } from "@chakra-ui/react";

interface TravelTypeItemProps {
  isDesktopVersion: boolean | undefined;
  image: string;
  text: string;
}

export function TravelTypeItem({
  isDesktopVersion,
  image,
  text,
}: TravelTypeItemProps) {
  return (
    <>
      {!!isDesktopVersion ? (
        <Stack spacing={1.5} alignItems={"center"}>
          <Image
            src={`images/${image}`}
            alt={`${image}`}
            width={"75px"}
            height={"75px"}
          />
          <Heading
            fontSize={"1.5rem"}
            fontWeight={"semibold"}
            color={"dark.heading"}
          >
            {text}
          </Heading>
        </Stack>
      ) : (
        <GridItem justifySelf={"center"}>
          <Heading
            fontSize={"1.125rem"}
            fontWeight={"semibold"}
            color={"dark.heading"}
          >
            {text}
          </Heading>
        </GridItem>
      )}
    </>
  );
}
