import React from "react";
import funnel_img from "../assets/images/png/funnel_image.png";
import funnel_arrow from "../assets/images/png/funnel_arrow.png";
const Funnel = () => {
  return (
    <>
      <div className="max-w-[1514px] mx-auto 2xl:px-0 px-3 rounded-[45px] bg-white ">
        <div className=" pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-[150px] relative">
          <span className="w-[95%] h-[2px] bg-[#cdbcb9] block left-[50%] rounded -translate-x-[50%] absolute bottom-0"></span>
          <div className="relative flex justify-center">
            <img
              className="max-w-[400px] rounded-[45px]  md:max-w-[500px] lg:max-w-[600px] xl:max-w-[833px] w-full mx-auto"
              src={funnel_img}
              alt="funnel"
            />
            <img
              className="absolute xl:-top-[30%] lg:-top-[42%] md:-top-[50%] sm:-top-[45%] -top-[40%] md:w-auto w-[500px] left-[50%] -translate-x-[50%]"
              src={funnel_arrow}
              alt="arrow"
            />
          </div>
          <p className="text-black xl:!leading-[85px] sm:absolute left-2 md:left-4 min-[1400px]:left-10 top-[32%] lg:top-[25%] xl:top-[28%] min-[1400px]:top-[25%] xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-medium flex items-center gap-4 sm:p-0 px-3">
            Decentralized
          </p>
          <p className="text-black xl:!leading-[85px] sm:absolute left-2 md:left-7 lg:left-10 xl:left-14 min-[1400px]:left-22 bottom-[29%] lg:bottom-[37%] xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-medium sm:max-w-[270px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[541px] flex gap-4 mt-4 sm:mt-0 sm:p-0 px-3">
            100% Trading Fee For You
          </p>
          <p className="text-black xl:!leading-[85px] sm:absolute end-11 top-[38%] xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-medium flex items-center gap-4 mt-4 sm:mt-0 sm:p-0 px-3">
            1600 Live Pairs
          </p>
          <p className="text-black xl:!leading-[85px] sm:absolute end-20 md:end-32 lg:end-[160px] xl:end-[200px] bottom-[21%] lg:bottom-[25%] xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-medium flex items-center gap-4 mt-4 sm:mt-0 sm:p-0 px-3">
            Sovereignty
          </p>
        </div>
      </div>
    </>
  );
};
export default Funnel;
