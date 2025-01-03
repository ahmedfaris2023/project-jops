"use client";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import Image from "next/image";

const ImageSlider = () => {
  const images = [
    "/assets/images/partners/bmw.png",
    "/assets/images/partners/nasa.png",
    "/assets/images/partners/cibBank.png",
    "/assets/images/partners/huawei.png",
  ];

  return (
    <div className="">
      <div className=" ">
        <h2 className="text-center text-xl md:text-4xl md:pb-10 font-bold mb-4 text-white mt-10">
          Our Partners
        </h2>
        <div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={5}
            slidesPerView={3.5}
            className="w-full"
            breakpoints={{
              350: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 20,
              },
            }}
          >
            {images.map((img, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center"
              >
                <div className="flex justify-center items-center bg-white h-12  md:h-32 rounded-lg shadow-md">
                  <Image
                    src={img}
                    alt={`Partner ${index + 1}`}
                    width={90}
                    height={70}
                    className="w-12 h-12 md:h-20 md:w-20"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
