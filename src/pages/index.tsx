import { Divider } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>World Trip | Home</title>
      </Head>

      <Header />
      <Banner />
      <TravelTypes />
      <Divider
        mx={"auto"}
        mb={["24px", "24px", "24px", "52px"]}
        w={["60px", "60px", "60px", "80px"]}
        borderBottom={"2px"}
        borderColor={"dark.heading"}
      />
    </>
  );
};

export default Home;
