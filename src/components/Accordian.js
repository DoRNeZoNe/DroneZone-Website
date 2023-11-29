import React, { useState } from "react";
import "../componentCss/accordion.css";

const Accordion = ({ title, content }) => {
	const [isOpen, setIsOpen] = useState(false);

	// Function to toggle the accordion state
	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={`accordion ${isOpen ? "active1" : ""}`}>
			{/* Header section of the accordion */}
			<div
				className={`accordion-header ${isOpen ? "active1" : ""}`}
				onClick={toggleAccordion}
			>
				<div className="flex w-[600px]">
					<div className="">
						<div className="text-white lg:w-[1020px]">{title}</div>
					</div>
					<div className="logoplus mt-[-9px] lg:ml-[944px]  absolute justify-center flex items-center ">
						<span
							className={`material-symbols-outlined ${isOpen ? "active1" : ""}`}
						>
							{!isOpen ? (
								<div className="-mt-[4px]">+</div>
							) : (
								<div className="-mt-[4px]">-</div>
							)}
						</span>
					</div>
				</div>
			</div>

			{/* Content section of the accordion*/}
			{isOpen && (
				<div className="accordion-content">
					<p>{content}</p>
				</div>
			)}
		</div>
	);
};

export default Accordion;
