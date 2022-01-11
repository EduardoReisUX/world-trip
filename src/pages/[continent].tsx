import { Container, Flex, Heading } from "@chakra-ui/react";
import type { GetServerSidePropsContext } from "next";
import Head from "next/head";

import { Header } from "./../components/Header";

interface ContinentProps {
  params: {
    continent: string;
  };
}

function Continent({ params }: ContinentProps) {
  return (
    <>
      <Head>
        <title>World Trip | {params.continent}</title>
      </Head>

      <Flex direction={"column"} align={"center"} justify={"center"}>
        <Container>
          <Heading>{params.continent.toUpperCase()}</Heading>
        </Container>
      </Flex>
    </>
  );
}

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  console.log(params);

  return {
    props: {
      params,
    },
  };
}

export default Continent;
