/* eslint-disable react/jsx-filename-extension */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "../componentCss/home.css";
import drone from "../images/drone.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TopModels from "./TopModels";
import Faq from "./Faq";

function Home() {
  return (
    <>
      <div className="homeBody">
        <div className="flex justify-center items-center mt-44 flex-col w-full lg:flex-row text-white mb-14 max-lg:gap-6 lg:mb-48">
          <div className="flex justify-center max-lg:mx-14 lg:mx-14 gap-8 items-start flex-col lg:w-[800px]">
            <div className="max-sm:text-5xl text-6xl">
              <div className="">DroneZone</div>
            </div>
            <div className="max-sm:text-lg text-3xl lg:h-[38px]">
              Your Gateway to Cinematic Excellence!
            </div>

            <div className="w-full">
              <div className="max-sm:text-sm w-full lg:w-[65%] ">
                We are here to make your aerial dreams come true. Our mission is
                simple: to provide you with cutting-edge cinematic drones that
                are not only lightweight but also incredibly affordable.
              </div>
            </div>
          </div>
          <div className=" relative flex justify-center items-center">
            <img className="imagedrone" src={drone} alt="" />
          </div>
        </div>
        <div className="content3 flex max-sm:text-xl items-center justify-center text-3xl w-full lg:text-5xl ">
          Features you would definitely loves
        </div>
        <div className="flex justify-center">
          <div className=" flex  mt-[150px] space-y-24 mb-32 lg:mt-[123px] lg:items-end h-auto justify-center  lg:space-x-11 flex-col lg:flex-row lg:flex max-md:gap-[50px] ">
            <div className="card1 ">
              <div className="ballsvg flex justify-center items-center  ml-28 -mt-14 ">
                <div className="number  text-white text-4xl">1</div>
              </div>
              <div className="content4 text-xl my-6 mx-16">
                Lightweight Marvels
              </div>
              <div className="content4 text-lg my-8 mx-9">
                Carry them with ease to capture your world from any angle
              </div>
            </div>
            <div className="card1 ">
              <div className="ballsvg  flex justify-center items-center ml-28 -mt-14">
                <div className="number text-white text-4xl">2</div>
              </div>
              <div className="content4 text-xl my-6 mx-20">Budget-Friendly</div>
              <div className="content4  text-lg my-8 mx-9">
                We are making high-quality aerial photography and videography
                accessible to everyone
              </div>
              <div className="content4  text-lg my-8 mx-9" />
            </div>
            <div className="card1 ">
              <div className="ballsvg flex justify-center items-center ml-28 -mt-14">
                <div className="number text-white text-4xl">3</div>
              </div>
              <div className="content4 text-xl my-6 mx-16">
                Technical Excellences
              </div>
              <div className="content4  text-lg my-8 mx-9">
                Expect precision, stability, and impressive flight times from
                your Drone Zone companion
              </div>
            </div>
          </div>
        </div>
      </div>
      <TopModels />
      <Faq />
    </>
  );
}

export default Home;
