const CompanyPhilosophy = () => {
  return (
    <div className="pt-20 px-16">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="text-primary">The company's philosophy</div>
      </div>
      <div className="w-full pr-12 h-[1px] bg-white mt-2"></div>
      <div className="pt-10 flex justify-between">
        <div className="flex flex-col w-[600px]">
          <div className="text-primary text-6xl font-bold leading-tight">
            We bear the responsibility of developing the sector.
          </div>
          <div className="text-[#646A69] w-[500px] text-2xl pt-6">
            Elevate your brand with our comprehensive marketing solutions,
            including Digital Marketing, Content Creation, and Social Media
            Strategy. Enhance visibility through expert SEO and PPC management,{" "}
          </div>
        </div>
        <div className="flex flex-col gap-12 pr-12 ">
          <div>
            <div className="text-5xl text-white font-bold">1,200+</div>
            <div className="text-[#646A69] pt-3">Clients</div>
          </div>
          <div>
            <div className="text-5xl text-white font-bold">20+</div>
            <div className="text-[#646A69] pt-3">Branches</div>
          </div>
          <div>
            <div className="text-5xl text-white font-bold">200+</div>
            <div className="text-[#646A69] pt-3">Number of Employees</div>
          </div>
          <div>
            <div className="text-5xl text-white font-bold">315+</div>
            <div className="text-[#646A69] pt-3">Sales Representative</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPhilosophy;
