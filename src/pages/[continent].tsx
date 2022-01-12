import { Container } from "@chakra-ui/react";
import type { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { Cities } from "../components/Cities";
import { ContinentBanner } from "../components/ContinentBanner";
import { Info } from "../components/Info";

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

      <ContinentBanner />
      <Container maxW={"container.lg"}>
        <Info />
        <Cities />
      </Container>
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
