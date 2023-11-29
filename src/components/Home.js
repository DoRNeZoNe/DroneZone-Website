import React from "react";
import "../componentCss/home.css";
import { ReactComponent as BallSvg } from "../Svg/ball.svg";
import drone from "../images/drone.png";

import question from "../data/frequentquent.json";
import Accordian from "./Accordian";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import Slider from "../components/Slider";
import Coursel from "../components/Coursel";

const Home = () => {
	return (
		<>
			<div className="lg:flex justify-center">
				<div className="flex-col flex justify-center  ">
					<div className="droneZone text-6xl mt-[147px] mx-[128px] lg:w-[275px]">
						<div>DroneZone</div>
					</div>
					<div className="content1 w-[80%] h-[100px] mx-32 my-8 lg:w-[431px] lg:h-[38px]">
						Your Gateway to Cinematic Excellence!
					</div>
					<div className="content2 w-[80%] h-[200px] mx-32 my-8 lg:w-[640px] lg:h-[106px]">
						We're here to make your aerial dreams come true. Our mission is
						simple: to provide you with cutting-edge cinematic drones that are
						not only lightweight but also incredibly affordable.
					</div>
				</div>

				<div className="imagedrone   my-16 lg:mt-[147px]  w-[350px] h-[300px] ">
					<img className="ml-[137px] lg:ml-[-6rem] " src={drone} alt="" />
				</div>
			</div>
			<div className="content3 flex justify-center text-xl w-full lg:text-5xl ">
				Features you would definitely loves
			</div>
			<div className="flex justify-center">
				<div className=" flex  mt-[150px] space-y-32 lg:mt-[173px] lg:items-end h-auto justify-center  lg:space-x-12  flex-col lg:flex-row lg:flex ">
					<div className="card1 ">
						<div className="ballsvg flex justify-center items-center  ml-28 -mt-14 ">
							<div className="number  text-white text-4xl">1</div>
						</div>
						<div className="content4 text-xl my-6 mx-16">
							Lightweight Marvels
						</div>
						<div className="content4 text-lg my-8 mx-9">
							{" "}
							Carry them with ease to capture your world from any angle
						</div>
					</div>
					<div className="card1 ">
						<div className="ballsvg  flex justify-center items-center ml-28 -mt-14">
							<div className="number text-white text-4xl">2</div>
						</div>
						<div className="content4 text-xl my-6 mx-20">Budget-Friendly</div>
						<div className="content4  text-lg my-8 mx-9">
							We're making high-quality aerial photography and videography
							accessible to everyone
						</div>
					</div>
					<div className="card1 ">
						<div className="ballsvg flex justify-center items-center ml-28 -mt-14">
							<div className="number text-white text-4xl">3</div>
						</div>
						<div className="content4 text-xl my-6 mx-16">
							Technical Excellences
						</div>
						<div className="content4  text-lg my-8 mx-9">
							Expect precision, stability, and impressive flight times from your
							Drone Zone companion
						</div>
					</div>
				</div>
			</div>
			<div className=" flex justify-center   mt-36 text-4xl text-white">
				Top Selling Models
			</div>
			{/* coursel */}
			<div className=" justify-center items-center  ">
				<div className="">
					<Coursel />
				</div>
			</div>
			<div className="flex justify-center mt-28 text-4xl text-white">
				Frequently asked questions
			</div>

			<div className="flex ml-[100px] mt-16 mb-12 justify-center items-center">
				<div className=" accordion1 flex flex-col justify-center items-center ">
					{question.map((q) => {
						return (
							<Accordian index={q.id} title={q.question} content={q.answer} />
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Home;
