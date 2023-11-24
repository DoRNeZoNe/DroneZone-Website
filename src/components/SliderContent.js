import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
	return (
		<section>
			{sliderImage.map((slide, index) => (
				<div
					key={index}
					className={index === activeIndex ? "slides active" : "inactive"}
				>
					<img className="slide-image mt-0 " src={slide.urls} alt="" />
					<div className="flex-col ml-[75px] flex w-[900px] justify-center mt-[590px] ">
						<div className="slide-title">{slide.title}</div>
						<div className=" mt-40 ml-12 w-[900px] text-white text-xl absolute">
							{slide.message}
						</div>
					</div>
					<div className="text-xl h-full w-full">{slide.description}</div>
				</div>
			))}
		</section>
	);
}

export default SliderContent;

// margin-top: 450px;
// margin-left: 360px;
