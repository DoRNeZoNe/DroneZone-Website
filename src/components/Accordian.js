import { useState } from "react";
import "../componentCss/tempacc.css";

// eslint-disable-next-line react/prop-types
function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? "active1" : ""}`}>
      <div
        className={`accordion-header ${isOpen ? "active1" : ""}`}
        onClick={toggleAccordion}
      >
        <div className="flex flex-row">
          <div className="text-white flex-grow">{title}</div>
          <div className="logoplus justify-center items-center flex  ">
            <span
              className={`material-symbols-outlined ${isOpen ? "active1" : ""}`}
            >
              {!isOpen ? (
                <div className="lg:mt-[-4px]">+</div>
              ) : (
                <div className="lg:mt-[-4px]">-</div>
              )}
            </span>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

export default Accordion;
