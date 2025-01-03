import Image from "next/image";

const Banner = () => {
  return (
    <div className="pl-8 md:pl-16 relative">
      <div className="flex flex-col md:flex-row pt-[10px] md:pt-[100px] justify-between gap-6 md:pl-12 ">
        <div className="text-white text-3xl w-[340px] flex justify-center flex-col   items-center text-center md:text-6xl font-bold  md:w-[700px] md:items-start md:justify-start md:text-start">
          Transform your business with our{" "}
          <span className="bg-gradient-to-r from-[#E879F9] to-purple-900 text-transparent bg-clip-text">
            Creative Marketing Solutions!
          </span>
          <div className="text-sm md:text-xl pt-12 md:pt-8   md:w-[750px]">
            Welcome to Focus Marketing Solutions! We're a creative team
            dedicated to driving your business forward with innovative marketing
            strategies. From digital marketing to social media management, we're
            here to help you succeed. Let's build something extraordinary
            together.
          </div>
          <div className="flex flex-col  gap-5 items-center pt-10 md:pt-10 md:block">
            <button className="text-white rounded-full ml-2 md:w-20 h-10 md:h-12 w-[300px] text-center bg-primary text-[12px] md:text-[14px] transition-transform duration-300 hover:scale-110">
              Join us
            </button>
            <button className="border text-white rounded-full h-10 md:w-[130px] md:h-12 w-[300px] px-4 text-[12px] md:text-[14px] ml-2 transition-transform duration-300 hover:scale-110">
              Contact us
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            src="/assets/images/Rectangle.png"
            width={535}
            height={445}
            alt="company"
          />
        </div>
      </div>
      <div className="hidden md:flex justify-between pl-10 md:z-0">
        <Image
          src="/assets/images/image3.png"
          width={500}
          height={200}
          className="pt-[100px]"
          alt="image3"
        />
        <Image
          src="/assets/images/image.png"
          className="mr-[230px] pt-10"
          width={300}
          height={300}
          alt="image"
        />
      </div>
    </div>
  );
};

export default Banner;
