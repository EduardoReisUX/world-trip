import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

import { Box, Flex, Spinner } from "@chakra-ui/react";
import { SlideItem } from "./SlideItem";

import { useQuery } from "react-query";

export function Slides() {
  const { data, isLoading, error } = useQuery("continents", async () => {
    const response = await fetch("http://localhost:3000/api/continents");
    const data = await response.json();

    const continents = data.continents.map(
      (continent: { image: string; title: string; text: string }) => ({
        image: continent.image,
        title: continent.title,
        text: continent.text,
      })
    );

    return continents;
  });

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
        <Flex justify={"center"}>Falha ao obter dados dos continentes. 😢</Flex>
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
          {data.map(
            (
              continent: { image: string; title: string; text: string },
              index: number
            ) => (
              <SwiperSlide key={index}>
                <SlideItem
                  image={continent?.image}
                  title={continent?.title}
                  text={continent?.text}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      )}
    </Box>
  );
}
