import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

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
        <SwiperSlide>
          <SlideItem
            image="europe.png"
            title="Europa"
            text="O continente mais antigo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem
            title="América"
            text='Considerada como "Novo Mundo"'
            image="europe.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem
            title="Ásia"
            text="O maior dos continentes, tanto em área como em população"
            image="europe.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem
            title="África"
            text="O terceiro continente mais extenso"
            image="europe.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem
            title="Oceania"
            text='Conhecida como "Novíssimo Mundo"'
            image="europe.png"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
