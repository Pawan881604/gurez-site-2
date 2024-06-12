import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import 'swiper/css/navigation';
import Category_MediaCard from "../Category_MediaCard";
import customTheme from "../theme/theme.config";
import { Container } from "@mui/material";
const Categorie_slider = () => {
  return (
    <>
      <Container
        maxWidth="sm"
        className={"Categorie_slider_Swiper"}
        style={{
          maxWidth: [customTheme.screens.lg],
          padding: [customTheme.themes.layout.padding.screen_large],
        }}
      >
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          // modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide style={{ width: "350px !important" }}>
            <Category_MediaCard />
          </SwiperSlide>
          <SwiperSlide style={{ width: "350px" }}>
            <Category_MediaCard />
          </SwiperSlide>
          <SwiperSlide style={{ width: "350px" }}>
            <Category_MediaCard />
          </SwiperSlide>
          <SwiperSlide style={{ width: "350px" }}>
            <Category_MediaCard />
          </SwiperSlide>
          <SwiperSlide style={{ width: "350px" }}>
            <Category_MediaCard />
          </SwiperSlide>
          <SwiperSlide style={{ width: "350px" }}>
            <Category_MediaCard />
          </SwiperSlide>
          <SwiperSlide style={{ width: "350px" }}>
            <Category_MediaCard />
          </SwiperSlide>
          <SwiperSlide style={{ width: "350px" }}>
            <Category_MediaCard />
          </SwiperSlide>
          <SwiperSlide style={{ width: "350px" }}>
            <Category_MediaCard />
          </SwiperSlide>
          <SwiperSlide style={{ width: "350px" }}>
            <Category_MediaCard />
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
};

export default Categorie_slider;
