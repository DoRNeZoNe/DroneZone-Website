import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent.js";
import Dots from "./Dots.js";
import Arrows from "./Arrows";
import sliderImage from "../data/slides.js";
import "../componentcss/slider.css";

const len = sliderImage.length - 1;

function Slider(props) {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
		}, 5000);
		return () => clearInterval(interval);
	}, [activeIndex]);

	return (
		<div className="slider-container ">
			<SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
			<Arrows
				prevSlide={() =>
					setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
				}
				nextSlide={() =>
					setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
				}
			/>
			<Dots
				activeIndex={activeIndex}
				sliderImage={sliderImage}
				onclick={(activeIndex) => setActiveIndex(activeIndex)}
			/>
		</div>
	);
}

export default Slider;
