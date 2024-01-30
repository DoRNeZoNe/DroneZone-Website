import React from "react";
import question from "../data/frequentquent.json";
import Accordian from "./Accordian";

function Faq() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className=" mt-[200px] max-sm:ml-[10%] flex justify-center text-4xl text-white">
          Frequently asked questions
        </div>
      </div>

      <div className=" mt-12 flex flex-col justify-center items-center ">
        {question.map((q) => (
          <Accordian
            key={q.id}
            index={q.id}
            title={q.question}
            content={q.answer}
          />
        ))}
      </div>
    </div>
  );
}

export default Faq;
