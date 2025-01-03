import Image from "next/image";

const Services = () => {
  const data = [
    {
      img: "/assets/images/services/Image.png",
      title: "Video Making",
      dec: "Random content ",
    },
    {
      img: "/assets/images/services/Image2.png",
      title: "Branding",
      dec: "Random content to fill the blank space",
    },
    {
      img: "/assets/images/services/Image3.png",
      title: "Marketing strategy",
      dec: "Random content to fill the blank space",
    },
    {
      img: "/assets/images/services/Image4.png",
      title: "Email Marketing",
      dec: "Random content ",
    },
    {
      img: "/assets/images/services/Image5.png",
      title: "Social Media Managing",
      dec: "Random content to fill the blank space",
    },
    {
      img: "/assets/images/services/Image8.png",
      title: "Content Writing ",
      dec: "Random content to fill the blank space",
    },
  ];

  return (
    <div
      id="services"
      className="w-full pt-10 flex flex-col gap-4 items-center px-4 md:px-8"
    >
      <div className="text-white text-3xl md:text-4xl pt-5">Our services</div>
      <div className="text-[#646A69] text-center text-sm md:text-base">
        Transforming your online presence with innovative digital strategies
      </div>
      <div className="grid grid-cols-2 justify-center items-center text-center gap-10 pt-10 sm:grid-cols-3">
        {data.map((service, index) => (
          <div
            key={index}
            className="p-4 flex flex-col justify-center items-center w-full sm:w-[250px] rounded-lg"
          >
            <div className="w-32 h-32 flex justify-center items-center bg-white  overflow-hidden">
              <Image
                src={service.img}
                alt={service.title}
                width={120}
                height={120}
                className=""
              />
            </div>
            <div className="text-lg font-bold mt-2 text-white">
              {service.title}
            </div>
            <div className="text-sm text-[#646A69] pt-2 text-center">
              {service.dec}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
