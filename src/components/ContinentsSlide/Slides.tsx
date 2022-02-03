import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

import { Box, Button, Flex, Spinner } from "@chakra-ui/react";
import { SlideItem } from "./SlideItem";

import { useQuery } from "react-query";

interface ContinentsData {
  continents: {
    image: string;
    title: string;
    text: string;
  }[];
}

export function Slides() {
  const { data, isLoading, error, refetch } = useQuery(
    "continents",
    async () => {
      const response = await fetch(
        "https://worldtrip-rust.vercel.app/api/continents"
      );
      const data: ContinentsData = await response.json();

      const continents = data.continents.map(({ image, text, title }) => ({
        image,
        title,
        text,
      }));

      return continents;
    },
    {
      refetchOnWindowFocus: false,
      retry: 1,
    }
  );

  return (
    <Box
      maxW={{ base: "100%", lg: "container.xl" }}
      h={{ base: "250px", lg: "450px" }}
      mt={"20px"}
      mb={"24px"}
      mx={"auto"}
    >
      {isLoading ? (
        <Flex justify={"center"}>
          <Spinner size={"xl"} thickness="4px" color="highlight.100" />
        </Flex>
      ) : error ? (
        <Flex direction={"column"} align={"center"} justify={"center"}>
          Falha ao obter dados dos continentes. 😢
          <Button
            mt={4}
            bg={"highlight.50"}
            color={"dark.heading"}
            _hover={{ bg: "highlight.100", color: "light.heading" }}
            onClick={() => refetch()}
          >
            Tentar novamente
          </Button>
        </Flex>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          direction="horizontal"
          spaceBetween={16}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4500,
          }}
          style={{ maxWidth: "inherit", height: "inherit" }}
        >
          {data?.map(({ image, title, text }, index: number) => (
            <SwiperSlide key={index + image + title + text}>
              <SlideItem image={image} title={title} text={text} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Box>
  );
}
