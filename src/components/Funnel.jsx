import React from "react";
import funnel_img from "../assets/images/png/funnel_image.png";
import funnel_arrow from "../assets/images/png/funnel_arrow.png";
const Funnel = () => {
  return (
    <>
      <div className="max-w-[1514px] mx-auto 2xl:px-0 px-5 rounded-[45px] bg-white ">
        <div className=" pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-[150px] relative">
          <span className="w-[95%] h-[2px] bg-[#cdbcb9] block left-[50%] rounded -translate-x-[50%] absolute bottom-0"></span>
          <div className="relative flex justify-center">
            <img
              className="max-w-[400px] rounded-[45px]  md:max-w-[300px] lg:max-w-[600px] xl:max-w-[650px] min-[1440px]:max-w-[833px] w-full mx-auto"
              src={funnel_img}
              alt="funnel"
            />
            <img
              className="absolute min-[1440px]:-top-[30%] xl:-top-[40%] lg:-top-[42%] md:-top-[60%] sm:-top-[45%] -top-[40%]  lg:w-auto w-[500px] left-[50%] -translate-x-[50%]"
              src={funnel_arrow}
              alt="arrow"
            />
          </div>
          <p className="text-black xl:!leading-[85px] sm:absolute left-2 md:left-4 lg:left-0 min-[1400px]:left-10 top-[32%] lg:top-[25%] xl:top-[28%] min-[1400px]:top-[25%] xl:text-6xl lg:text-[42px] md:text-3xl text-2xl font-medium sm:mt-0 mt-5">
            Decentralized
          </p>
          <p className="text-black xl:!leading-[85px] sm:absolute left-2 md:left-2 lg:left-10 xl:left-1 min-[1400px]:left-22 bottom-[29%] lg:bottom-[37%] xl:text-6xl lg:text-[42px] md:text-3xl text-2xl font-medium sm:max-w-[270px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[541px] mt-4 sm:mt-0">
            100% Trading Fee For You
          </p>
          <p className="text-black xl:!leading-[85px] sm:absolute end-11 top-[38%] xl:text-6xl lg:text-[42px] md:text-3xl text-2xl font-medium mt-4 sm:mt-0">
            1600 Live Pairs
          </p>
          <p className="text-black xl:!leading-[85px] sm:absolute end-20 md:end-32 lg:end-[160px] xl:end-[200px] bottom-[21%] lg:bottom-[25%] xl:text-6xl lg:text-[42px] md:text-3xl text-2xl font-medium mt-4 sm:mt-0">
            Sovereignty
          </p>
        </div>
      </div>
    </>
  );
};
export default Funnel;
