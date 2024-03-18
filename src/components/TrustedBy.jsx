import React, { useEffect, useState } from "react";
import { trustedBy } from "./common/Helper";

const TrustedBy = () => {
  const [cardShow, setCardShow] = useState(5);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setCardShow(5);
      } else {
        setCardShow(10);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="sm:pb-[100px] pb-12 xl:mt-[124px] lg:mt-24 md:mt-20 sm:mt-16 mt-12">
      <div className="max-w-[1514px] mx-auto 2xl:px-0 px-3">
        <h2 className="text-black font-medium xl:text-6xl lg:text-5xl md:text-4xl text-3xl text-center mb-10">
          Tusted By
        </h2>
        <div className="overflow-hidden">
          <div className="flex items-center lg:gap-[65px] md:gap-12 slide_container ">
            {trustedBy.slice(0, cardShow).map((obj, index) => {
              return (
                <div key={index}>
                  <img className={obj.className} src={obj.logo} alt={obj.alt} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
