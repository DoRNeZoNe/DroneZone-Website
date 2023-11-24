import React from "react";
import "../componentcss/nav.css";
const Navbar = () => {
	return (
		<div className="flex snap- flex-no-wrap  mt-0">
			<div>
				<div className=" relative logo text-5xl  mt-4 mx-9  w-2">
					<span className="logoD">D</span>
					<span className="logoZ">Z</span>
				</div>
			</div>

			<div className="navbar relative mt-6 mx-40 flex  md:mt-4 md:mx-36">
				<div className="home hover:cursor-pointer text-cyan-50  mx-8  hover:text-2xl">
					Home
				</div>
				<div className="models hover:cursor-pointer text-cyan-50 mx-8 hover:text-2xl">
					Models
				</div>
				<div className="contact hover:cursor-pointer text-cyan-50 mx-8 hover:text-2xl">
					Contact
				</div>
			</div>
			<div className="mt-4">
				<button className=" call absolute   md:right-14  whitespace-nowrap hover:bg-cyan-800 hover:text-red-400  border-4 border-blue-400  text-white font-bold py-2 px-4 rounded-full">
					Call now
				</button>
			</div>
		</div>
	);
};

export default Navbar;
