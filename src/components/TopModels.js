import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Coursel from "../components/Coursel";
const TopModels = () => {
	const myStyles = {
		background: "radial-gradient(50% 50% at 50% 50%, #2D4141 0%, #031C23 100%)",
	};
	return (
		<div style={myStyles} className="">
			<div className=" flex justify-center   mt-0 text-4xl text-white">
				Top Selling Models
			</div>
			{/* coursel */}
			<div className=" justify-center items-center  ">
				<div className="">
					<Coursel />
				</div>
			</div>
		</div>
	);
};

export default TopModels;
