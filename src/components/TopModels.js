import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Coursel from "./Coursel";

function TopModels() {
  return (
    <div className="">
      <div className=" flex justify-center  mt-0 text-4xl text-white">
        Top Selling Models
      </div>
      <div className=" justify-center items-center  ">
        <div className="max-sm:-mt-[180px] max-md:-mt-[150px] max-lg:-mt-[70px]">
          <Coursel />
        </div>
      </div>
    </div>
  );
}

export default TopModels;
