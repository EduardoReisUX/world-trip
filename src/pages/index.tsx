import type { NextPage } from "next";
import Head from "next/head";

import { Banner } from "../components/Banner";
import { ContinentsSlide } from "../components/ContinentsSlide";
import { Divider } from "../components/Divider";
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

      <Divider />

      <ContinentsSlide />
    </>
  );
};

export default Home;
