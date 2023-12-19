import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImage from "../data/slides.js";
import "../componentCss/coursel.css";
const Carousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		autoplay: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div className="container mx-auto w-[60%] p-4 h-[600px]">
			<Slider {...settings}>
				{sliderImage.map((s) => (
					// eslint-disable-next-line react/jsx-no-comment-textnodes
					<div className="relative">
						<div className="flex justify-center">
							<img
								src={s.urls}
								alt=""
								className="w-auto h-[600px] object-contain"
							/>
						</div>

						<div className="absolute inset-0 mt-14 flex items-center justify-center">
							<div className="text-white mt-[29rem] flex flex-col justify-center items-center">
								<h2 className="text-3xl font-bold ">{s.title}</h2>
								{/* <div className="lg:text-lg text-base">{s.message}</div> */}
								<div className="lg:text-lg    w-full h-full">{s.message}</div>
								{/* </div> */}
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

// function App() {
// 	return (
// 		<div className="App">
// 			<Carousel />
// 		</div>
// 	);
// }

export default Carousel;
