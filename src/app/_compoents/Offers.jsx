"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Offers() {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <div className="flex justify-between  p-10 items-center   ">
        <div>
          <div className="text-white text-6xl font-bold leading-tight w-[600px]">
            Simple pricing for your Business
          </div>
          <div className="text-white pt-3 w-[600px]">
            We have several powerful plans to showcase your business and get
            discovered as a creative entrepreneurs. Everything you need.
          </div>
        </div>
        <div className="pt-10 ">
          {!showAnswer && (
            <div className="flex justify-between p-6 items-center  text-center bg-[#1A1A1A] w-[800px] h-[100px] mr-10 rounded-md">
              <div className=" text-4xl font-bold text-primary">intro</div>
              <button
                onClick={() => setShowAnswer(true)}
                className="flex justify-center items-center bg-primary w-14 h-14 rounded-full text-center"
              >
                <Image
                  className="pt-1"
                  src={"/assets/images/Vector.png"}
                  width={20}
                  height={20}
                  alt="image"
                />
              </button>
            </div>
          )}
          {showAnswer && (
            <div className="bg-primary  h-[320px] rounded-lg  w-[700px] p-5 mr-14 relative">
              <div className="flex justify-between items-center  text-center   h-[100px] mr-10 rounded-md">
                <div className="text-4xl font-bold text-white flex items-center gap-4">
                  intro
                  <div className="flex items-center justify-center bg-white text-primary w-[100px] h-12 text-center rounded-sm text-xl">
                    save $40
                  </div>
                </div>

                <button
                  onClick={() => setShowAnswer(false)}
                  className="flex justify-center items-center bg-[#FDECFF] bg-opacity-15 w-14 h-14 rounded-full text-center inset-0"
                >
                  <Image
                    src={"/assets/images/Vector2.png"}
                    width={20}
                    height={20}
                    alt="image"
                  />
                </button>
              </div>
              <div className="text-white text-2xl">
                Pro account gives you freedom with uploading HD videos and can
                also meet all your business needs apasih kamu
              </div>
              <div className="flex  justify-between pt-10 ">
                <div className="text-white text-2xl font-bold pt-8">
                  $123 <span className="text-xl font-light">/month</span>
                </div>

                <div className="bg-white w-[180px] h-[50px] flex items-center justify-center font-bold rounded-xl text-xl">
                  Try 1 month
                </div>
              </div>
              <div>
                <Image
                  className=" absolute top-0 left-[170px] opacity-15 "
                  src={"/assets/images/imagePriceLine.png"}
                  width={400}
                  height={400}
                  alt="imageLine"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
