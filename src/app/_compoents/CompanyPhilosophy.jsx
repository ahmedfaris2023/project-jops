const CompanyPhilosophy = () => {
  return (
    <div id="Branches" className="pt-20 px-6 sm:px-10 md:px-16">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="text-primary text-sm sm:text-base">
          The company's philosophy
        </div>
      </div>
      <div className="w-full h-[1px] bg-white mt-2"></div>
      <div className="pt-10 flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex flex-col w-full lg:w-[600px]">
          <div className="text-primary text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
            We bear the responsibility of developing the sector.
          </div>
          <div className="text-[#646A69] text-base sm:text-lg lg:text-2xl pt-6">
            Elevate your brand with our comprehensive marketing solutions,
            including Digital Marketing, Content Creation, and Social Media
            Strategy. Enhance visibility through expert SEO and PPC management.
          </div>
        </div>

        <div className="grid grid-cols-2  md:flex md:flex-col md:mr-12 gap-8 sm:gap-10 pr-0 lg:pr-12">
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold">
              1,200+
            </div>
            <div className="text-[#646A69] pt-2 sm:pt-3 text-sm sm:text-base">
              Clients
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold">
              20+
            </div>
            <div className="text-[#646A69] pt-2 sm:pt-3 text-sm sm:text-base">
              Branches
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold">
              200+
            </div>
            <div className="text-[#646A69] pt-2 sm:pt-3 text-sm sm:text-base">
              Number of Employees
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold">
              315+
            </div>
            <div className="text-[#646A69] pt-2 sm:pt-3 text-sm sm:text-base">
              Sales Representative
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPhilosophy;
