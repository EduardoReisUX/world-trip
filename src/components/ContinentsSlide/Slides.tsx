import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Box } from "@chakra-ui/react";
import { SlideItem } from "./SlideItem";

export function Slides() {
  return (
    <Box
      maxW={{ base: "100%", lg: "container.xl" }}
      h={{ base: "250px", lg: "450px" }}
      mt={"20px"}
      mb={"24px"}
      mx={"auto"}
    >
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        direction="horizontal"
        spaceBetween={16}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={{ maxWidth: "inherit", height: "inherit" }}
      >
        <SwiperSlide>
          <SlideItem
            image="europe.png"
            title="Europa"
            text="O continente mais antigo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem title="América" text="O continente mais antigo" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem title="Ásia" text="O continente mais antigo" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem title="África" text="O continente mais antigo" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem title="Oceania" text="O continente mais antigo" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
