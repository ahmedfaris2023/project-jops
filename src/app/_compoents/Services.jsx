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
    <div className="w-full pt-10 flex flex-col gap-4 items-center">
      <div className="text-white text-4xl pt-5">Our services</div>
      <div className="text-[#646A69]">
        ransforming your online presence with innovative digital strategies{" "}
      </div>
      <div className="grid grid-cols-3 gap-20 pt-10">
        {data.map((service, index) => (
          <div
            key={index}
            className="p-4 flex flex-col justify-center items-center  w-[250px]"
          >
            <Image
              src={service.img}
              alt={service.title}
              width={120}
              height={120}
            />

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
