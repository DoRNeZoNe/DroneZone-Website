import React, { useState } from "react";
import "../componentCss/nav.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
	const [bar, setBar] = useState("fa-bars");
	const [close, setClose] = useState(true);
	const [hide, setHide] = useState("hidden");
	const toggleOnClick = () => {
		if (close) {
			setBar("fa-xmark");
			setClose(false);
			setHide("block");
		} else {
			setBar("fa-bars");
			setClose(true);
			setHide("hidden");
		}
	};
	const navigate = useNavigate();
	const handleClickModels = () => {
		navigate("/models");
	};
	const handleClickHome = () => {
		navigate("/");
	};
	const handleClickContact = () => {
		navigate("/contact");
	};
	return (
		<div className=" navbar flex items-center fixed  backdrop-blur-lg bg-transparent/10 w-full  snap- flex-no-wrap  mt-0 z-50   p-11">
			<div>
				<div className=" flex  items-center justify-center lg:relative logo text-5xl  mt-4 mx-9  w-2">
					<span className="logoD">D</span>
					<span className="logoZ">Z</span>
				</div>
			</div>

			<div className="links relative mt-6 mx-auto flex text-xl md:mt-4 md:mx-36">
				<div className="home  text-cyan-50  mx-14 ">
					<div
						onClick={handleClickHome}
						className="hover:cursor-pointer -mt-[13px]  hover:text-2xl  fixed"
					>
						Home
					</div>
				</div>
				<div className="models  text-cyan-50 mx-14 ">
					<div
						onClick={handleClickModels}
						className="hover:cursor-pointer -mt-[13px]  hover:text-2xl  fixed"
					>
						Models
					</div>
				</div>
				<div className="contact  text-cyan-50 mx-14">
					<div
						onClick={handleClickContact}
						className="hover:cursor-pointer -mt-[13px]  hover:text-2xl  fixed"
					>
						Contact
					</div>
				</div>
			</div>
			<div
				className="toggle_btn  right-[50px] absolute  justify-center items-center block lg:hidden"
				onClick={toggleOnClick}
			>
				<i className={`bar fa-solid  ${bar}`}></i>
			</div>
			<div className={`${hide}`}>
				<div className="dropdown_menu backdrop-blur-lg bg-transparent/10">
					<li onClick={handleClickHome}>Home</li>
					<li onClick={handleClickModels}>Models</li>
					<li onClick={handleClickContact}>Contact</li>
					<button className="action_btn hover:border-2 border-[1px] border-blue-400">
						Call Now
					</button>
				</div>
			</div>
			<div className="call-now right-[53px] fixed">
				<button className=" mx-2   w-[80px] mb-[39px] sm:mb-0    call lg:w-[148px]   lg:right-14  whitespace-nowrap hover:border-2 right-0  border-blue-400  text-white font-bold lg:py-2 lg:px-4 rounded border-[1px]">
					Call now
				</button>
			</div>
		</div>
	);
};

export default Navbar;
