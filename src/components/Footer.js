// import React from "react";
// import twitter from "../images/twitter 1.png";
// import facebook from "../images/facebook 1.png";
// import instagram from "../images/instagram 1.png";
// import "../componentCss/footer.css";
// const Footer = () => {
// 	return (
// 		<div className="containerfooter w-full ">
// 			<div className="h-[350px] mb-0  flex flex-row ">
// 				<div className=" absolute mt-24 ml-32   text-5xl  mx-9  w-2">
// 					<div className="flex logodz text-white">
// 						<div className="">D</div>
// 						<div className="">Z</div>
// 					</div>
// 					<div className=" whitespace-nowrap logoname text-white">
// 						Drone Zone{" "}
// 					</div>
// 					<div className="flex flex-row p-2 space-x-4 h-12 w-12">
// 						<img src={twitter} alt="" />
// 						<img src={facebook} alt="" />
// 						<img src={instagram} alt="" />
// 					</div>
// 				</div>
// 				<div className=" text-white flex flex-col space-y-4 absolute mx-[450px] mt-24">
// 					<div className="text-xl  hover:cursor-pointer font-bold ">About</div>
// 					<div className="text-lg  hover:cursor-pointer">Company</div>
// 					<div className="text-lg  hover:cursor-pointer">Contact US</div>
// 					<div className="text-lg  hover:cursor-pointer">
// 						Terms and Services
// 					</div>
// 					<div className="text-lg  hover:cursor-pointer">
// 						Privacy and Policy
// 					</div>
// 				</div>

// 				<div className=" text-white flex flex-col space-y-4 absolute mx-[690px] mt-[6rem]">
// 					<div className="text-xl  hover:cursor-pointer font-bold ">
// 						Product
// 					</div>
// 					<div className="text-lg  hover:cursor-pointer">Categories</div>
// 					<div className="text-lg  hover:cursor-pointer">Pricing</div>
// 					<div className="text-lg  hover:cursor-pointer">Testimonials</div>
// 				</div>
// 				<div className=" text-white flex flex-col space-y-4 absolute mx-[690px] mt-[6rem]">
// 					<div className="text-xl  hover:cursor-pointer font-bold ">
// 						Product
// 					</div>
// 					<div className="text-lg  hover:cursor-pointer">Categories</div>
// 					<div className="text-lg  hover:cursor-pointer">Pricing</div>
// 					<div className="text-lg  hover:cursor-pointer">Testimonials</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Footer;

import React from "react";
import twitter from "../images/twitter 1.png";
import facebook from "../images/facebook 1.png";
import instagram from "../images/instagram 1.png";
import "../componentCss/footer.css";
const Footer = () => {
	return (
		<footer className="flex flex-col items-center bg-neutral-100 text-center dark:bg-neutral-600 lg:text-left">
			<div className="container p-6">
				<div className="grid place-items-center md:grid-cols-2 lg:grid-cols-4">
					<div className="mb-6">
						<h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
							Links
						</h5>

						<ul className="mb-0 list-none">
							<li>
								<a href="#!" className="text-neutral-800 dark:text-neutral-200">
									Link 1
								</a>
							</li>
							<li>
								<a href="#!" className="text-neutral-800 dark:text-neutral-200">
									Link 2
								</a>
							</li>
							<li>
								<a href="#!" className="text-neutral-800 dark:text-neutral-200">
									Link 3
								</a>
							</li>
							<li>
								<a href="#!" className="text-neutral-800 dark:text-neutral-200">
									Link 4
								</a>
							</li>
						</ul>
					</div>

					<div className="mb-6">
						<h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
							About
						</h5>

						<ul className="mb-0 list-none">
							<li>
								<a href="#!" className="text-neutral-800 dark:text-neutral-200">
									Company
								</a>
							</li>
							<li>
								<a href="#!" className="text-neutral-800 dark:text-neutral-200">
									Contact Us
								</a>
							</li>
							<li>
								<a href="#!" className="text-neutral-800 dark:text-neutral-200">
									Terms and Services
								</a>
							</li>
							<li>
								<a href="#!" className="text-neutral-800 dark:text-neutral-200">
									Privacy and Policy
								</a>
							</li>
						</ul>
					</div>

					<div className="mb-6">
						<h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
							Product
						</h5>

						<ul className="mb-0 list-none">
							<li>
								<a href="#!" className="text-neutral-800 dark:text-neutral-200">
									Categories
								</a>
							</li>
							<li>
								<a href="#!" className="text-neutral-800 dark:text-neutral-200">
									Pricing
								</a>
							</li>
							<li>
								<a href="#!" className="text-neutral-800 dark:text-neutral-200">
									Testimonials
								</a>
							</li>
						</ul>
					</div>

					<div className="mb-6">
						<h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
							Discover
						</h5>

						<ul className="mb-0 list-none">
							<li>
								<a href="#!" className="text-neutral-800 dark:text-neutral-200">
									Teams
								</a>
							</li>
							<li>
								<a href="#!" className="text-neutral-800 dark:text-neutral-200">
									Partners
								</a>
							</li>
							<li>
								<a href="#!" className="text-neutral-800 dark:text-neutral-200">
									Career
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="w-full bg-neutral-200 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
				© 2023 Copyright:
				<a
					className="text-neutral-800 dark:text-neutral-400"
					href="https://tw-elements.com/"
				>
					TW elements
				</a>
			</div>
		</footer>
	);
};

export default Footer;
