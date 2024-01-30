import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// eslint-disable-next-line import/extensions
import sliderImage from "../data/slides.js";
import "../componentCss/coursel.css";

function SampleNextArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { onClick } = props;
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      onClick={onClick}
      className="slick-next absolute top-1/2 max-md:-mr-7 -mr-14 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded"
    >
      Next
    </button>
  );
}
function SamplePrevArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { onClick } = props;
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      onClick={onClick}
      className="slick-prev absolute top-1/2 max-md:-mx-8 -mx-16 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded"
    >
      Previous
    </button>
  );
}

const truncateText = (text, maxWords = 20) => {
  const words = text.split(" ");
  if (words.length > maxWords) {
    return `${words.slice(0, maxWords).join(" ")}... Read More`;
  }
  return text;
};
function Carousel() {
  const [maxWords, setMaxWords] = useState(20);

  useEffect(() => {
    const handleResize = () => {
      setMaxWords(window.innerWidth > 700 ? 30 : 17);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="container mx-auto w-[60%] p-4 h-[600px]">
      <Slider {...settings}>
        {sliderImage.map((s) => (
          <div className="relative" key={s.id}>
            <div className="flex justify-center mb-[100px]">
              <img
                src={s.urls}
                alt=""
                className="w-auto h-[600px] object-contain"
              />
            </div>

            <div className="absolute inset-0 mt-14 flex items-center justify-center">
              <div className="text-white mt-[29rem] flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold  ">{s.title}</h2>
                <div className="lg:text-lg  max-sm:mb-44 mt-5   w-full h-full">
                  {truncateText(s.message, maxWords)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default Carousel;
