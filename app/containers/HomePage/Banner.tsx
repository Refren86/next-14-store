"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        speed={1500}
        className="home-slider"
      >
        {Array.from({ length: 4 }).map((_, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full rounded-xl">
              <Image
                src="/images/slider/slider-placeholder.webp"
                alt="slide"
                loading="lazy"
                className="rounded-xl"
                fill
                />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
