import React from "react";
import "../componentCss/models.css";
import droneModel from "../data/droneModel";

function ModelsPage() {
  return (
    <div className="modelBody min-h-screen">
      {droneModel.map((d) => (
        <div>
          <div className="flex justify-center items-center flex-col">
            <div className="modelName flex justify-center items-center mt-40 text-white">
              {d.modelName}
            </div>
            <div className="droneImage w-[60%] flex justify-center items-center m-6">
              <img className="  " src={d.image} alt="" />
            </div>
            <div className="featuresBox  flex max-sm:h-auto max-sm:w-[60%]   h-auto w-[65%] flex-row">
              <div className=" features grid place-items-center   md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between w-[70%] mt-[21px] mx-auto mb-[30px]">
                <div className="grid-item ">
                  <div className="flex flex-col space-y-3 justify-center items-center text-white ">
                    <div>{d.range}</div>
                    <div className=" text-sm">Range</div>
                  </div>
                </div>
                <div className="grid-item ">
                  <div className="flex flex-col space-y-3 justify-center items-center text-white">
                    <div>{d.time}</div>
                    <div className="text-sm">0-60 mph</div>
                  </div>
                </div>
                <div className="grid-item ">
                  <div className="flex flex-col space-y-3 justify-center items-center text-white">
                    <div>{d.topSpeed}</div>
                    <div className="text-sm">Top Speed</div>
                  </div>
                </div>
                <div className="grid-item ">
                  <div className="flex flex-col space-y-3 justify-center items-center text-white">
                    <div>{d.peakPower}</div>
                    <div className="text-sm">Peak Power</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content w-[65%] mt-10">
              Capture stunning, crystal-clear 4K video and 20MP photos with the
              SkyMaster X1 Pro. The 3-axis gimbal ensures silky-smooth,
              professional-grade footage, even in challenging conditions.
              Capture stunning, crystal-clear 4K video and 20MP photos with the
              SkyMaster X1 Pro. The 3-axis gimbal ensures silky-smooth,
              professional-grade footage, even in challenging conditions.
              Capture stunning, crystal-clear 4K video and 20MP photos with the
              SkyMaster X1 Pro. The 3-axis gimbal ensures silky-smooth,
              professional-grade footage, even in challenging conditions.
              <span className="font-semibold hover:cursor-pointer">
                Learn more
              </span>
            </div>
            <div className="button h-8 w-40 p-1 flex justify-center items-center text-white mt-12">
              Request Quotes
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ModelsPage;
