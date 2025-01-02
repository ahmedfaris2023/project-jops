"use client";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import Image from "next/image";

const CustomerFeedback = () => {
  const swiperRef = useRef(null); // مرجع لـ Swiper

  const person = [
    {
      img: "/assets/images/personOne.png",
      name: "Jonathan Sweeney",
      dec: "I love that model. I [used to have to] call all around, and I absolutely love that model that you could save me the time and headache of doing that.",
    },
    {
      img: "/assets/images/personTwo.png",
      name: "Barbara Cook",
      dec: "I am so happy with your company. Ever since my insurer switched to you, everything and everybody I ve spoken to has been extremely, extremely pleasant, helpful, and they listen to my concerns instead of just saying okay",
    },
    {
      img: "/assets/images/personThree.png",
      name: "Mary Rogers",
      dec: "I just want to thank you for the great job you did during my transition to oxygen. You unraveled all the confusion and the new company is wonderful.",
    },
    {
      img: "/assets/images/personTwo.png",
      name: "Barbara Cook",
      dec: "I am so happy with your company. Ever since my insurer switched to you, everything and everybody I ve spoken to has been extremely, extremely pleasant, helpful, and they listen to my concerns instead of just saying okay",
    },
  ];

  const goToNextSlide = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <div className="pl-4 md:pl-14 bg-primary pt-10 md:h-[800px] h-[650px] relative">
      <div>
        <h2 className="text-center text-3xl md:text-6xl mb-8 md:mb-14 text-white py-8 md:py-12">
          Our clients opinions
        </h2>
        <div>
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1.1}
            breakpoints={{
              500: {
                slidesPerView: 2.1,
              },
              1024: {
                slidesPerView: 3.1,
              },
            }}
            className="w-full"
            navigation={{
              nextEl: ".swiper-button-next",
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            loop={true}
          >
            <div>
              {person.map((data, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center"
                >
                  <div className="flex flex-col justify-start bg-black rounded-lg shadow-md p-6 md:p-10  max-w-xs md:max-w-sm">
                    <Image
                      src={data.img}
                      alt={`Partner ${index + 1}`}
                      width={90}
                      height={70}
                      className="object-contain"
                    />
                    <div className="text-white font-bold pt-2 text-lg">
                      {data.name}
                    </div>
                    <div className="text-white pt-5 md:pt-7 text-sm md:text-base">
                      {data.dec}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
          <div className="custom-pagination flex justify-center gap-2 mt-8 md:mt-16"></div>
          <div
            className="cursor-pointer absolute top-[300px] md:top-[360px] right-5 md:right-10 z-10"
            onClick={goToNextSlide}
          >
            <Image
              src={"/assets/images/Arrows.png"}
              height={40}
              width={40}
              className="md:height-50 md:width-50"
              alt="Next"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
