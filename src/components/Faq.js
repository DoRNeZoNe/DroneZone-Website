import React from "react";
import question from "../data/frequentquent.json";
import Accordian from "./Accordian";
const Faq = () => {
	const myStyles = {
		background:
			"radial-gradient(40.05% 0% at 94.13% 4.2%, rgba(70, 244, 255, 0.20) 0%, rgba(10, 226, 226, 0.02) 96.81%), #031820",
		boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
	};

	return (
		<div style={myStyles}>
			<div className="flex justify-center items-center">
				<div className=" mt-[200px] max-sm:ml-[10%] flex justify-center text-4xl text-white">
					Frequently asked questions
				</div>
			</div>

			<div className=" mt-12 flex flex-col justify-center items-center ">
				{question.map((q) => {
					return (
						<Accordian index={q.id} title={q.question} content={q.answer} />
					);
				})}
			</div>
		</div>
	);
};

export default Faq;
