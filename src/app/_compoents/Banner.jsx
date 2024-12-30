import Image from "next/image";

const Banner = () => {
  return (
    <div className="pl-16">
      <div className="flex pt-[100px]  gap-6 pl-20">
        <div className="  text-white text-6xl font-bold">
          Transform your business with our
          <span className="bg-gradient-to-r from-[#E879F9]  to-purple-900  inline-block text-transparent bg-clip-text">
            {" "}
            Creative Marketing Solutions!
          </span>
          <div className="text-xl pt-8 pr-[250px]">
            Welcome to Focus Marketing Solutions! We're a creative team
            dedicated to driving your business forward with innovative marketing
            strategies. From digital marketing to social media management, we're
            here to help you succeed. Let's build something extraordinary
            together
          </div>
          <div className="flex items-center pt-10">
            <button className="text-white  rounded-full ml-2 w-20 h-12 text-center bg-primary text-[14px] ">
              Join us
            </button>
            <button className="border text-white rounded-full  h-12 px-4 text-[14px] ml-2 ">
              Contact us
            </button>
          </div>
        </div>
        <div>
          <Image
            src="/assets/images/Rectangle.png"
            width={1200}
            height={1200}
          />
        </div>
      </div>
      <div className="flex justify-between pl-10">
        <Image src="/assets/images/image3.png" width={500} height={300} />
        <Image
          src="/assets/images/image.png"
          className="mr-[190px] pt-10"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Banner;
