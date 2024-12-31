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
    <div className="pt-20 px-16 h-[1000px]">
      <div className="flex justify-between">
        <div className="text-3xl text-white font-bold">News</div>
        <button className="text-white  rounded-full ml-2 w-32 h-10 text-center bg-primary text-[14px] font-bold">
          View all news
        </button>
      </div>
      <div className="flex justify-around gap-20 ">
        <div className="pt-14 ">
          <div>
            <Image
              src={"/assets/images/ImageNews.png"}
              width={750}
              height={750}
            />
          </div>
          <div className="flex gap-3 pt-6   ">
            <div className="  bg-white rounded-full text-1xl fontb w-[100px] h-10 flex items-center justify-center  text-center ">
              company
            </div>
            <div className="  bg-white rounded-full text-1xl fontb w-[100px] h-10 flex items-center justify-center  text-center ">
              Contracts
            </div>
          </div>
          <div className="text-white text-4xl pt-5 w-[700px]">
            We specialize in fostering effective partnerships with supportive
            companies to drive mutual success.
          </div>
          <div className="text-[#646A69] pt-5 w-[700px]">
            We are committed to building effective partnerships with supporting
            companies, contributing to the advancement, development, and
            expansion of the sector through diverse capabilities, expertise, and
            technological innovation.
          </div>
        </div>
        <div className="w-[1500px] mt-10">
          {data.map((data, index) => (
            <div key={index} className="flex  gap-12  p-6 ">
              <div>
                <Image src={data.img} width={200} height={200} />
              </div>
              <div className="w-[340px] ">
                <div className="text-white text-3xl ">{data.dec}</div>
                <div className="flex gap-3 pt-6   ">
                  <div className="  bg-white rounded-full text-1xl fontb w-[100px] h-10 flex items-center justify-center  text-center ">
                    company
                  </div>
                  <div className="  bg-white rounded-full text-1xl fontb w-[100px] h-10 flex items-center justify-center  text-center ">
                    Contracts
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
