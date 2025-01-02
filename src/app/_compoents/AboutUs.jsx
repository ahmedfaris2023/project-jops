import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="pt-28 relative z-10">
      <Image
        src={"/assets/images/Lines.png"}
        width={1000}
        height={1400}
        className=" h-[300px] pr-[100px] md:w-[1550px] md:h-[600px]"
        alt="Background Lines"
      />
      <div className="flex flex-col items-center gap-8 absolute top-[100px] md:top-[200px] w-full px-4">
        <div className="text-white text-3xl md:text-5xl font-bold">
          About us
        </div>
        <div className="text-white text-sm md:text-lg w-full md:w-[750px] text-center md:text-left">
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
          <button className="border border-primary text-primary rounded-full h-10 w-[350px] md:w-[160px] px-6 text-sm md:h-12 md:px-9 md:text-[16px] font-bold">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
