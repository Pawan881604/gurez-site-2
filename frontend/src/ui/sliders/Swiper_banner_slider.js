import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "./slider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "@mui/material";
import customTheme from "../theme/theme.config";
const Swiper_banner_slider = () => {
  return (
    <>
      <div
        style={{
          padding: [customTheme.themes.layout.padding.screen_large],
        }}
      >
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              // "background-image":
              //   "url(https://swiperjs.com/demos/images/nature-1.jpg)",
              background: "#f8f1e8",
            }}
            data-swiper-parallax="-100%"
          ></div>
          <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
              Corrugated Boxes
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
              <Button
                variant="contained"
                sx={{
                  width: 100,
                  marginTop: 2,
                  padding: "5px 15px",
                  backgroundColor: "#354200",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#354200",
                    border: "1px solid #354200",
                  },
                }}
              >
                Explore
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
              Corrugated Boxes
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p style={{ color: "#fff" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
              <Button variant="contained" sx={{ width: 100, marginTop: 2 }}>
                Explore
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
              Corrugated Boxes
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p style={{ color: "#fff" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
              <Button variant="contained" sx={{ width: 100, marginTop: 2 }}>
                Explore
              </Button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Swiper_banner_slider;
