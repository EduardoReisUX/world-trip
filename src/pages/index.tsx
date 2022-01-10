import { Flex, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Flex>
      <Heading color={"dark.heading"}>Hello, World!</Heading>
    </Flex>
  );
};

export default Home;
