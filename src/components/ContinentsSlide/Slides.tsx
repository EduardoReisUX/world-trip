import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

import { Box } from "@chakra-ui/react";
import { SlideItem } from "./SlideItem";
import { useEffect, useState } from "react";

type ContinentsData = {
  image: string;
  title: string;
  text: string;
};

export function Slides() {
  let [continents, setContinents] = useState<ContinentsData[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/continents")
      .then((res) => res.json())
      .then((json) => {
        setContinents(json.continents);
      });

    console.log(continents);
  }, []);

  return (
    <Box
      maxW={{ base: "100%", lg: "container.xl" }}
      h={{ base: "250px", lg: "450px" }}
      mt={"20px"}
      mb={"24px"}
      mx={"auto"}
    >
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
        {continents.map(({ image, text, title }, index) => (
          <SwiperSlide key={index}>
            <SlideItem image={image} title={title} text={text} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
