import "../componentCss/contact.css";

function Contact() {
  return (
    <div className="  min-h-screen ">
      <div className="flex justify-center items-center ">
        <div className=" flex   flex-col contact h-auto max-sm:w-[90%] max-xl:w-[70%] w-[60%]  mt-[160px]">
          <div className=" flex justify-center items-center mt-[60px] text-3xl text-white ">
            Contact Us
          </div>
          <div className="text-white text-xl max-sm:ml-[40px] mx-20 mt-7">
            Name :
          </div>
          <input
            className="inputBox w-[80%] max-sm:ml-[40px] mx-20  h-8 mt-4 text-white p-4 "
            type="text"
          />
          <div className="text-white text-xl max-sm:ml-[40px] mx-20 mt-7">
            Phone no. :
          </div>
          <input
            className="inputBox w-[80%] max-sm:ml-[40px] mx-20  h-8 mt-4 text-white p-4 "
            type="text"
          />
          <div className="text-white text-xl max-sm:ml-[40px] mx-20 mt-7">
            Email address :
          </div>
          <input
            className="inputBox w-[80%] max-sm:ml-[40px] mx-20  h-8 mt-4 text-white p-4 "
            type="text"
          />
          <div className="text-white text-xl max-sm:ml-[40px] mx-20 mt-7">
            Query :
          </div>
          <textarea
            className="inputBox w-[80%] max-sm:ml-[40px] mx-20  mt-4 text-white p-4 "
            type="text"
          />
          <div className="button m-auto w-40 mb-12 mt-[50px] ">
            <div className="flex justify-center items-center p-2 hover:cursor-pointer  text-white">
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
