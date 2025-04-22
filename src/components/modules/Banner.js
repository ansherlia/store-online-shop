"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

function Banner() {
  return (
    <div className="w-full mx-auto mt-4 md:mt-[69px]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
      >
        {["style1.webp", "style2.webp", "style4.gif", "style3.webp"].map(
          (img, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center px-1 sm:px-0 ">
                <div className="w-full md:h-[350px] aspect-[16/9] relative">
                  <Image
                    src={`/images/${img}`}
                    alt={`banner ${index + 1}`}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
}

export default Banner;
