import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="pt-28 relative z-10">
      <Image
        src={"/assets/images/Lines.png"}
        width={1000}
        height={1400}
        className="w-[1550px] h-[600px]"
      />
      <div className="flex flex-col  items-center gap-8 absolute top-[200px] w-full ">
        <div className="text-white text-5xl  top-0 font-bold">About us</div>
        <div className="text-white text-1xl w-[750px]">
          Welcome to{" "}
          <span className="text-primary">Focus Marketing Solutions! </span>
          We're a creative team dedicated to driving your business forward with
          innovative marketing strategies. From digital marketing to social
          media management, we're here to help you succeed.{" "}
          <span className="text-primary">
            Let's build something extraordinary together.
          </span>
        </div>
        <div>
          <button className="border border-primary	 text-primary rounded-full  h-12 px-9 text-[16px] ml-2 font-bold ">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
