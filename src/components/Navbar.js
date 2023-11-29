import React from "react";
import "../componentCss/nav.css";
const Navbar = () => {
	return (
		<div className=" navbar flex items-center sm:fixed backdrop-blur-lg bg-transparent/10 w-full  snap- flex-no-wrap  mt-0 z-50   p-11">
			<div>
				<div className=" relative logo text-5xl  mt-4 mx-9  w-2">
					<span className="logoD">D</span>
					<span className="logoZ">Z</span>
				</div>
			</div>

			<div className=" relative mt-6 mx-auto flex text-xl md:mt-4 md:mx-36">
				<div className="home  text-cyan-50  mx-14 ">
					<div className="hover:cursor-pointer -mt-[13px]  hover:text-2xl  fixed">
						Home
					</div>
				</div>
				<div className="models  text-cyan-50 mx-14 ">
					<div className="hover:cursor-pointer -mt-[13px]  hover:text-2xl  fixed">
						Models
					</div>
				</div>
				<div className="contact  text-cyan-50 mx-14">
					<div className="hover:cursor-pointer -mt-[13px]  hover:text-2xl  fixed">
						Contact
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center">
				<button className=" callnow mx-2   w-[80px] mb-[39px] sm:mb-0    call lg:w-[148px] sm:fixed  lg:right-14  whitespace-nowrap hover:border-2   border-blue-400  text-white font-bold lg:py-2 lg:px-4 rounded border-[1px]">
					Call now
				</button>
			</div>
		</div>
	);
};

export default Navbar;
