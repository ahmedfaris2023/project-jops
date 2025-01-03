import Image from "next/image";

const News = () => {
  const data = [
    {
      img: "/assets/images/ImageNews2.png",
      dec: "We incorporate the formation of public partnerships as a core aspect of our operations.",
    },
    {
      img: "/assets/images/ImageNews3.png",
      dec: "We incorporate the formation of public partnerships as a core aspect of our operations.",
    },
    {
      img: "/assets/images/ImageNews4.png",
      dec: "We incorporate the formation of public partnerships as a core aspect of our operations.",
    },
  ];
  return (
    <div className="pt-[120px] px-4 sm:px-16 h-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="text-2xl sm:text-3xl text-white font-bold mb-4 sm:mb-0">
          News
        </div>
        <button className="text-white rounded-full ml-2 w-32 h-10 text-center bg-primary text-[14px] font-bold hidden md:block">
          View all news
        </button>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-20 mt-10 ">
        <div className="pt-10 sm:pt-14">
          <div>
            <Image
              src={"/assets/images/ImageNews.png"}
              width={750}
              height={750}
              className="w-full sm:w-[750px] h-auto"
              alt="img"
            />
          </div>
          <div className="flex gap-3 pt-6 flex-wrap">
            <div className="bg-white rounded-full text-sm sm:text-1xl font-bold w-[100px] h-10 flex items-center justify-center text-center">
              company
            </div>
            <div className="bg-white rounded-full text-sm sm:text-1xl font-bold w-[100px] h-10 flex items-center justify-center text-center">
              Contracts
            </div>
          </div>
          <div className="text-white text-xl sm:text-4xl pt-5 w-full sm:w-[700px]">
            We specialize in fostering effective partnerships with supportive
            companies to drive mutual success.
          </div>
          <div className="text-[#646A69] pt-5 text-sm sm:text-base w-full sm:w-[700px]">
            We are committed to building effective partnerships with supporting
            companies, contributing to the advancement, development, and
            expansion of the sector through diverse capabilities, expertise, and
            technological innovation.
          </div>
        </div>
        <div className="mt-10 ">
          {data.map((data, index) => (
            <div
              key={index}
              className="flex  sm:flex-row gap-4 sm:gap-12 md:p-6 p-4"
            >
              <div>
                <Image
                  src={data.img}
                  width={300}
                  height={300}
                  className=" sm:w-[200px] h-auto w-[200px]"
                />
              </div>
              <div className="w-full sm:w-[340px]">
                <div className="text-white text-lg sm:text-3xl">{data.dec}</div>
                <div className="flex gap-3 pt-8 ">
                  <div className="bg-white rounded-full text-sm sm:text-1xl font-bold w-[100px] md:h-10 h-8 flex items-center justify-center text-center">
                    company
                  </div>
                  <div className="bg-white rounded-full text-sm sm:text-1xl font-bold w-[100px] md:h-10 h-8 flex items-center justify-center text-center">
                    Contracts
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="text-white  justify-center items-center text-center bg-primary rounded-full w-[330px] h-[50px] ml-6 font-bold mt-10 block sm:hidden">
        Show all news
      </button>
    </div>
  );
};

export default News;
