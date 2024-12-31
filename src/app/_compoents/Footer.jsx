import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative ">
      <div className="bg-primary pl-12 ">
        <div className=" flex justify-between">
          <div className="flex justify-between w-[800px]">
            <div>
              <a href="#">
                <Image src="/assets/images/logo.png" width={140} height={140} />
              </a>
            </div>
            <div className="text-white flex flex-col gap-2  ">
              <div className="font-bold ">The company</div>
              <div>Who are we </div>
              <div>Services</div>
              <div className="flex gap-2 ">
                <div>Jobs</div>
                <div className="bg-black w-8 h-6 rounded-full flex justify-center items-center">
                  12
                </div>
              </div>
              <div>Branches</div>
            </div>
            <div className="text-white flex flex-col gap-2">
              <div className="text-white font-bold ">Help center</div>
              <div>Common questions</div>
              <div>Contact us</div>
              <div>Register as merchant</div>
            </div>
          </div>
          <div className="flex flex-col pr-12 gap-4">
            <div className="bg-white bg-opacity-40 w-[300px] h-[60px] flex items-center rounded-full ">
              <div className=" bg-white flex items-center justify-center w-[50px] h-[50px]  rounded-full ml-1">
                <Image
                  className="  "
                  src={"/assets/images/socialMedia/facebook1.png"}
                  width={25}
                  height={25}
                  alt="image"
                />
              </div>
              <div className="text-white font-bold pl-3">Instgram</div>
            </div>
            <div className="bg-white bg-opacity-40 w-[300px] h-[60px] flex items-center rounded-full ">
              <div className=" bg-white flex items-center justify-center w-[50px] h-[50px]  rounded-full ml-1">
                <Image
                  className="  "
                  src={"/assets/images/socialMedia/instagram.png"}
                  width={25}
                  height={25}
                />
              </div>
              <div className="text-white font-bold pl-3">Linkedin</div>
            </div>
            <div className="bg-white bg-opacity-40 w-[300px] h-[60px] flex items-center rounded-full ">
              <div className=" bg-white flex items-center justify-center w-[50px] h-[50px]  rounded-full ml-1">
                <Image
                  className="  "
                  src={"/assets/images/socialMedia/linkedin.png"}
                  width={25}
                  height={25}
                />
              </div>
              <div className="text-white font-bold pl-3">Facebook</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center text-white mt-40 pb-10">
          © 2024 Leader Express Delivery Company. All rights reserved.
        </div>
      </div>
      <div>
        <Image
          src={"/assets/images/LinesCopy.png"}
          width={900}
          height={900}
          className="absolute bottom-0  "
        />
      </div>
    </div>
  );
};

export default Footer;
