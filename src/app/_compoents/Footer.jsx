import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative">
      <div className="bg-primary px-4 md:pl-12 pt-10 md:pt-[150px]">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">
          {/* Logo and Links Section */}
          <div className="flex flex-col md:flex-row justify-between md:w-[700px] gap-10">
            <div className="flex  md:justify-start">
              <a href="#">
                <Image
                  src="/assets/images/logo.png"
                  width={140}
                  height={140}
                  alt="Logo"
                />
              </a>
            </div>
            <div className="md:flex md:gap-36 gap-18 grid grid-cols-2">
              <div className="text-white flex flex-col gap-2">
                <div className="font-bold">The company</div>
                <a>Who are we</a>
                <a>Services</a>
                <div className="flex gap-2 items-center">
                  <a>Jobs</a>
                  <div className="bg-black w-8 h-6 rounded-full flex justify-center items-center">
                    12
                  </div>
                </div>
                <a>Branches</a>
              </div>
              <div className="text-white flex flex-col gap-2">
                <a className="font-bold">Help center</a>
                <a>Common questions</a>
                <a>Contact us</a>
                <a>Register as merchant</a>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col  md:items-end gap-4">
            {[
              {
                img: "/assets/images/socialMedia/facebook1.png",
                name: "Instagram",
              },
              {
                img: "/assets/images/socialMedia/instagram.png",
                name: "Linkedin",
              },
              {
                img: "/assets/images/socialMedia/linkedin.png",
                name: "Facebook",
              },
            ].map((social, index) => (
              <button
                key={index}
                className="bg-white bg-opacity-40 w-[200px] md:w-[300px] h-[50px] flex items-center rounded-full transition-all duration-300 hover:bg-opacity-60 hover:shadow-lg"
              >
                <div className="bg-white flex items-center justify-center w-[40px] h-[40px] rounded-full ml-2">
                  <Image
                    src={social.img}
                    width={25}
                    height={25}
                    alt={`${social.name} icon`}
                  />
                </div>
                <div className="text-white font-bold pl-3">{social.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-center items-center text-white text-center mt-20 sm:mt-10 md:mt-40 pb-10">
          © 2024 Leader Express Delivery Company. All rights reserved.
        </div>
      </div>

      {/* Decorative Image */}
      <div className="absolute bottom-0  hidden md:block">
        <Image
          src={"/assets/images/LinesCopy.png"}
          width={900}
          height={900}
          alt="Decorative lines"
        />
      </div>
    </div>
  );
};

export default Footer;
