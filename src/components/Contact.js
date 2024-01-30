import { useContext, useState } from "react";

import "../componentCss/contact.css";

// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import { Alert } from "@mui/material";

function Contact() {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });
  const [validationMessage, setValidationMessage] = useState(false);
  const showAlertWithTimeout = (message) => {
    setValidationMessage(message);
    setTimeout(() => {
      setValidationMessage("");
    }, 2000);
  };
  const validatePhoneNumber = () => {
    const phoneNumberPattern = /^\d{10}$/;
    if (feedback.name === "") {
      showAlertWithTimeout("Please enter a valid name.");
      return true;
    }
    if (phoneNumberPattern.test(feedback.phone) === false) {
      showAlertWithTimeout("Please enter a valid 10-digit phone number.");
      return true;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(feedback.email) === false) {
      showAlertWithTimeout("Please enter a valid email address.");
      return true;
    }
    return false;
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      if (validatePhoneNumber() === false) {
        const response = await axios.post(
          "http://localhost:5005/api/feedback",
          feedback,
        );
      }
    } catch (error) {
      // console.log(error);
    }
    setFeedback({ name: "", email: "", phone: "", query: "" });
  };
  const onChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="flex justify-center items-center"></div>

      <form className="  min-h-screen ">
        <div className="flex justify-center items-center ">
          <div className=" flex   flex-col contact h-auto max-sm:w-[90%] max-xl:w-[70%] w-[60%]  mt-[180px]">
            <div className=" mt-[30px] h-[100px] flex flex-col  items-center text-3xl text-white ">
              <div className="">Contact Us</div>
              <div className="   flex justify-center items-center ">
                {validationMessage && (
                  <Alert severity="error" className="m-4">
                    <div>{validationMessage}</div>
                  </Alert>
                )}
              </div>
            </div>
            <div className="text-white text-xl max-sm:ml-[40px] mx-20 mt-7">
              Name :
            </div>
            <input
              name="name"
              required
              onChange={onChange}
              value={feedback.name}
              className="inputBox w-[80%] max-sm:ml-[40px] mx-20  h-8 mt-4 text-white p-4 "
              type="text"
            />
            <div className="text-white text-xl max-sm:ml-[40px] mx-20 mt-7">
              Phone no. :
            </div>
            <input
              name="phone"
              onChange={onChange}
              value={feedback.phone}
              className="inputBox w-[80%] max-sm:ml-[40px] mx-20  h-8 mt-4 text-white p-4 "
              type="tel"
              required
            />
            <div className="text-white text-xl max-sm:ml-[40px] mx-20 mt-7">
              Email address :
            </div>
            <input
              name="email"
              onChange={onChange}
              value={feedback.email}
              className="inputBox w-[80%] max-sm:ml-[40px] mx-20  h-8 mt-4 text-white p-4 "
              type="email"
              id="myEmail"
              required
            />
            <div className="text-white text-xl max-sm:ml-[40px] mx-20 mt-7">
              Query :
            </div>
            <textarea
              name="query"
              onChange={onChange}
              value={feedback.query}
              className="inputBox w-[80%] max-sm:ml-[40px] mx-20  mt-4 text-white p-4 "
              type="text"
            />
            <div className="button m-auto w-40 mb-12 mt-[50px] ">
              <div
                onClick={handleClick}
                className="flex justify-center items-center p-2 hover:cursor-pointer  text-white"
              >
                Submit
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
