import ChartsTwo from "./charts/ChartsTwo";
import Charts from "./charts/Charts";

const ChartsDashboard = () => {
  return (
    <div className="pt-[200px] ml-10 sm:ml-4 px-4 sm:px-0 md:ml-12">
      <div className="text-white font-bold text-3xl ">Our charts</div>
      <div className="flex flex-col sm:flex-row gap-10  md:gap-24 relative">
        {/* First Chart */}
        <div className="bg-white bg-opacity-5 w-full sm:w-[900px] h-[600px] mt-6">
          <div className="flex justify-between">
            <div className="pt-6 pl-6">
              <div className="text-white text-xl font-bold">Net Profit</div>
              <div className="text-[#BDBDBD]">2024</div>
            </div>
            <div className="bg-[#4F4F4F] text-black w-10 h-10 rounded-full items-center md:flex justify-center mt-6 ml-6 mr-8 text-2xl hidden">
              i
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#4F4D4D] mt-6"></div>
          <div className="w-full ">
            <ChartsTwo />
          </div>
        </div>

        {/* Second Chart */}
        <div className="bg-white bg-opacity-5 w-full sm:w-[500px] h-[600px] mt-6">
          <div className="pt-6 pl-6">
            <div className="text-white text-xl font-bold">Primary Text</div>
            <div className="text-white text-[16px] font-bold">5.987,34</div>
            <div className="text-[#BDBDBD] pb-1">Secondary text</div>
          </div>
          <div className="w-full h-[1px] bg-[#4F4D4D]"></div>
          <div className="w-full flex items-center justify-center">
            <Charts />
          </div>
          <div className="text-white flex gap-6 pt-12 pl-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div>Product 1</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#F3722C] rounded-full"></div>
              <div>Product 2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsDashboard;
