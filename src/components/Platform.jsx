import React from "react";
import left_arrow from "../assets/images/png/left_down_arrow.png";
import ideogram from "../assets/images/svg/ideogram.svg";
import { allPlateforme } from "./common/Helper";

const Platform = () => {
  return (
    <div className="bg-Linen xl:pt-[130px] lg:pt-[100px] md:pt-20 sm:pt-16 pt-12">
      <div className="max-w-[1514px] mx-auto 2xl:px-0 px-3  bg-[url(./assets/images/png/bg_lines.png)] bg-cove bg-no-repeat bg-bottom g-[length:100%_100%]">
        <h1 className="text-shark xl:leading-[65px] font-semibold xl:text-6xl lg:text-5xl md:text-4xl text-3xl text-center mb-8">
          <span className="font-normal md:text-custom-2xl text-xl block">
            All derivatives features
          </span>
          in 1 plateforme
        </h1>
        <div className="flex md:flex-row flex-col md:justify-between gap-6 md:items-end sm:pb-[230px] pb-[150px] xl:me-[37px]">
          <div className="md:w-5/12 ps-1 md:mb-2">
            <img
              className="xl:w-auto w-[200px] md:mx-0 mx-auto md:pe-0 pe-10"
              src={left_arrow}
              alt="arrows"
            />
            <div className="flex justify-center">
              <div className="sm:pt-9 sm:ps-10 xl:pe-[110px] sm:pe-20 sm:pb-6 p-6 bg-[#FCF0D7] rounded-[20px] inline-block">
                <p className="xl:text-3xl lg:text-2xl text-xl text-black font-medium max-w-[181px]">
                  Logo Community Ideas
                </p>
                <p className="text-[#C5AA73] xl:text-9xl lg:text-7xl md:text-5xl text-4xl font-normal font-architects-daughter-regular">
                  You
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[857px] p-[10px]">
            <div className="grid min-[500px]:grid-cols-2 min-[1400px]:gap-x-[125px] xl:gap-x-20 lg:gap-12 md:gap-3 gap-6 xl:gap-y-[58px]">
              {allPlateforme.map((obj, index) => {
                return (
                  <div
                    key={index}
                    className="rounded-[20px] lg:h-[296px] bg-white lg:px-9 lg:pt-9 lg:pb-6 p-4 pt-6 relative shadow-[0px_4px_4px_0px_#0000001F] hover:shadow-[0px_4px_4px_0px_#fff] transition-all duration-300
"
                  >
                    <span className="absolute right-[3px] top-0">
                      <img src={ideogram} alt="ideogram_logo" />
                    </span>
                    <h3 className="font-medium xl:text-3xl lg:text-2xl text-xl mb-4 text-black">
                      {obj.title}
                    </h3>
                    <p
                      className={`sm:text-lg text-base font-normal text-black max-w-[261px] ${obj.discriptionClass}`}
                    >
                      {obj.discription}
                    </p>
                    <div className={`flex ${obj.logoClass}`}>
                      {obj.logo.map((index) => {
                        return (
                          <div key={index}>
                            <img src={index} alt="logo" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
