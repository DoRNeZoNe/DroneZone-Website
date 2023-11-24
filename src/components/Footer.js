import React from "react";
import twitter from "../images/twitter 1.png";
import facebook from "../images/facebook 1.png";
import instagram from "../images/instagram 1.png";
import "../componentcss/footer.css";
const Footer = () => {
	return (
		<div className="containerfooter w-full ">
			<div className="h-[350px] mb-0  flex flex-row ">
				<div className=" absolute mt-24 ml-32   text-5xl  mx-9  w-2">
					<div className="flex logodz text-white">
						<div className="">D</div>
						<div className="">Z</div>
					</div>
					<div className=" whitespace-nowrap logoname text-white">
						Drone Zone{" "}
					</div>
					<div className="flex flex-row p-2 space-x-4 h-12 w-12">
						<img src={twitter} alt="" />
						<img src={facebook} alt="" />
						<img src={instagram} alt="" />
					</div>
				</div>
				<div className=" text-white flex flex-col space-y-4 absolute mx-[450px] mt-24">
					<div className="text-xl  hover:cursor-pointer font-bold ">About</div>
					<div className="text-lg  hover:cursor-pointer">Company</div>
					<div className="text-lg  hover:cursor-pointer">Contact US</div>
					<div className="text-lg  hover:cursor-pointer">
						Terms and Services
					</div>
					<div className="text-lg  hover:cursor-pointer">
						Privacy and Policy
					</div>
				</div>

				<div className=" text-white flex flex-col space-y-4 absolute mx-[690px] mt-[6rem]">
					<div className="text-xl  hover:cursor-pointer font-bold ">
						Product
					</div>
					<div className="text-lg  hover:cursor-pointer">Categories</div>
					<div className="text-lg  hover:cursor-pointer">Pricing</div>
					<div className="text-lg  hover:cursor-pointer">Testimonials</div>
				</div>
				<div className=" text-white flex flex-col space-y-4 absolute mx-[690px] mt-[6rem]">
					<div className="text-xl  hover:cursor-pointer font-bold ">
						Product
					</div>
					<div className="text-lg  hover:cursor-pointer">Categories</div>
					<div className="text-lg  hover:cursor-pointer">Pricing</div>
					<div className="text-lg  hover:cursor-pointer">Testimonials</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
