"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Offers() {
  const [activeOffer, setActiveOffer] = useState(null);

  const offers = [
    {
      id: 1,
      title: "Intro",
      description:
        "Pro account gives you freedom with uploading HD videos and can also meet all your business needs.",
      price: "$123",
      discount: "Save $40",
      period: "/month",
    },
    {
      id: 2,
      title: "Base",
      description:
        "Standard plan offers you advanced tools to manage your business with ease.",
      price: "$99",
      discount: "Save $20",
      period: "/month",
    },
    {
      id: 3,
      title: "Pro",
      description:
        "Pro plan includes all features to maximize your business potential.",
      price: "$199",
      discount: "Save $50",
      period: "/month",
    },
    {
      id: 4,
      title: "Enterprise",
      description:
        "Enterprise plan includes all features to maximize your business potential.",
      price: "$199",
      discount: "Save $50",
      period: "/month",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-12 p-5 lg:p-10 justify-between lg:h-[800px] md:mt-24">
      <div className="pt-10 flex flex-col items-center lg:items-start text-center lg:text-left">
        <div className="text-white text-4xl lg:text-7xl font-bold leading-tight lg:w-[580px]">
          Simple pricing for your Business
        </div>
        <div className="text-white pt-3 lg:w-[600px]">
          We have several powerful plans to showcase your business and get
          discovered as a creative entrepreneur. Everything you need.
        </div>
      </div>

      <div className="flex flex-col items-center lg:items-start">
        {offers.map((offer) => (
          <div key={offer.id} className="pt-6 w-full lg:w-auto">
            {activeOffer !== offer.id && (
              <div className="flex justify-between items-center p-4 lg:p-6 bg-[#1A1A1A] rounded-lg w-full lg:w-[700px] h-auto lg:h-[100px]">
                <div className="text-2xl lg:text-4xl font-bold text-primary">
                  {offer.title}
                </div>
                <button
                  onClick={() => setActiveOffer(offer.id)}
                  className="flex justify-center items-center bg-primary w-8 h-8 lg:w-14 lg:h-14 rounded-full"
                >
                  <Image
                    className="md:h-3 md:w-3"
                    src={"/assets/images/Vector.png"}
                    width={10}
                    height={10}
                    alt="image"
                  />
                </button>
              </div>
            )}
            {activeOffer === offer.id && (
              <div className="bg-primary rounded-lg p-5 lg:p-6 relative w-full lg:w-[700px]">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-2xl lg:text-4xl font-bold text-white flex items-center gap-4">
                    {offer.title}
                    <div className="bg-white text-primary px-4 py-2 rounded-sm text-base lg:text-xl">
                      {offer.discount}
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveOffer(null)}
                    className="flex justify-center items-center bg-white/10 w-8 h-8 lg:w-14 lg:h-14 rounded-full"
                  >
                    <Image
                      src={"/assets/images/Vector2.png"}
                      width={10}
                      height={10}
                      alt="image"
                      className="md:h-3 md:w-3"
                    />
                  </button>
                </div>
                <div className="text-white text-sm lg:text-2xl mb-4">
                  {offer.description}
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-white text-lg lg:text-2xl font-bold">
                    {offer.price}{" "}
                    <span className="text-sm lg:text-xl font-light">
                      {offer.period}
                    </span>
                  </div>
                  <div className="bg-white px-6 py-2 rounded-lg text-black font-bold">
                    Try 1 month
                  </div>
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-10">
                  <Image
                    src={"/assets/images/imagePriceLine.png"}
                    width={300}
                    height={300}
                    alt="imageLine"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
