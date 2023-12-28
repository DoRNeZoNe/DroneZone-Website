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
        <div className="lg:flex justify-center">
          <div className="flex-col flex justify-center  ">
            <div className="droneZone mt-20 max-sm:text-5xl  text-6xl lg:mt-[147px] lg:mx-[128px] lg:w-[275px] max-lg:mt-[150px]">
              <div>DroneZone</div>
            </div>
            <div className="content1 max-lg:mt-[50px] max-lg:mx-[10%] max-sm:text-lg text-3xl lg:mx-32 my-8 lg:w-[431px] lg:h-[38px]">
              Your Gateway to Cinematic Excellence!
            </div>

            <div>
              <div className="content2 max-lg:mx-[10%] max-sm:text-sm lg:mx-32 my-8 lg:w-[640px] lg:h-[106px]">
                We are here to make your aerial dreams come true. Our mission is
                simple: to provide you with cutting-edge cinematic drones that
                are not only lightweight but also incredibly affordable.
              </div>
            </div>
          </div>

          <div className=" relative lg:right-[80px]   lg:mt-[147px] w-full flex justify-center items-center">
            <img className="imagedrone" src={drone} alt="" />
          </div>
        </div>
        <div className="content3 flex max-sm:text-xl items-center justify-center text-3xl w-full lg:text-5xl ">
          Features you would definitely loves
        </div>
        <div className="flex justify-center">
          <div className=" flex  mt-[150px] space-y-12 mb-32 lg:mt-[123px] lg:items-end h-auto justify-center  lg:space-x-12  flex-col lg:flex-row lg:flex ">
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
