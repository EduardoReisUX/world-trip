import { Stack } from "@chakra-ui/react";
import { ContinentDescription } from "./ContinentDescription";
import { InfoItem } from "./InfoItem";

export function Info() {
  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      spacing={{ base: 4, lg: 16 }}
      align={"center"}
    >
      <ContinentDescription />

      <Stack
        direction={"row"}
        flex={1}
        spacing={{ base: 4, lg: 10 }}
        justify={"space-evenly"}
        w={{ base: "auto", lg: "50%" }}
      >
        <InfoItem heading="50" text="países" />
        <InfoItem heading="60" text="línguas" />
        <InfoItem heading="24" text="cidades +100" />
      </Stack>
    </Stack>
  );
}
