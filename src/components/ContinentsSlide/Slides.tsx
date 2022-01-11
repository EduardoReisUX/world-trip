import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Box, useBreakpointValue } from "@chakra-ui/react";
import { SlideItem } from "./SlideItem";

export function Slides() {
  const isDesktopVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      maxW={isDesktopVersion ? "1024px" : "100%"}
      h={isDesktopVersion ? "450" : "250px"}
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
            isDesktopVersion={isDesktopVersion}
            title="Europa"
            text="O continente mais antigo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem
            isDesktopVersion={isDesktopVersion}
            title="América"
            text="O continente mais antigo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem
            isDesktopVersion={isDesktopVersion}
            title="Ásia"
            text="O continente mais antigo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem
            isDesktopVersion={isDesktopVersion}
            title="África"
            text="O continente mais antigo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem
            isDesktopVersion={isDesktopVersion}
            title="Oceania"
            text="O continente mais antigo"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
