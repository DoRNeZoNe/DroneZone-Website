import React, { useState } from "react";
import "../componentcss/accordion.css";

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
						<p>{title}</p>
					</div>
					<div className="mt-[-9px] ml-[833px] absolute ">
						<span
							className={`material-symbols-outlined ${isOpen ? "active1" : ""}`}
						>
							{!isOpen ? <div>+</div> : <div>-</div>}
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
