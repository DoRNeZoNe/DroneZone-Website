// import React from "react";

// const Model = (model) => {
// 	const myStyles = {
// 		background: `
// 		    radial-gradient(6.61% 48.99% at 48.99% 68.59%, rgba(3, 168, 148, 0.30) 0%, rgba(0, 0, 0, 0.00) 100%),
// 		    radial-gradient(6.74% 50% at 50% 41.53%, rgba(3, 168, 148, 0.30) 0%, rgba(0, 0, 0, 0.00) 100%),
// 		    radial-gradient(6.34% 46.71% at 50% 13.81%, rgba(51, 255, 243, 0.30) 0%, rgba(0, 3, 3, 0.00) 99.99%, rgba(0, 0, 0, 0.09) 100%),
// 		    #031820
// 		  `,
// 	};
// 	return (
// 		<div style={myStyles}>
// 			<div className="flex items-center justify-center">{model.name}</div>
// 			<div>
// 				<img src="" alt="" />
// 			</div>
// 			<div
// 				className="flex flex-col justify-center items-center rounded-s"
// 				style={{ background: `rgba(198, 198, 198, 0.15)` }}
// 			>
// 				<div>Range</div>
// 				<div>Range</div>
// 				<div>Range</div>
// 				<div>Range</div>
// 			</div>
// 			<div className="flex justify-center items-center">content</div>
// 			<div className="border-solid border-t border-b border-l border-r border-[#38CEFE]">
// 				Request
// 			</div>
// 		</div>
// 	);
// };

// export default Model;
import React from "react";

const Model = (m) => {
	return (
		<div>
			<div className="w-[80%] h-[100px] bg-white flex justify-center items-center flex-col">
				<div className="text-black">{m.modelName}</div>
			</div>
		</div>
	);
};

export default Model;
