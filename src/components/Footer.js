import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import facebook from "../images/Facebook Circled.png";
import twitter from "../images/Twitter Circled.png";
import divnkedIn from "../images/LinkedIn Circled.png";
import "../componentCss/footer.css";

function Footer() {
  return (
    <div className="fotterBody">
      <footer className="flex flex-col items-center mt-10 text-center  lg:text-left">
        <div className="container p-6">
          <div className="grid place-items-center md:grid-cols-3 lg:grid-cols-5">
            <div className="mb-6 ">
              <div className="mb-0 flex flex-col justify-center items-center">
                <div>
                  <div
                    href="#!"
                    className="logo text-neutral-800 dark:text-neutral-200"
                  >
                    DZ
                  </div>
                </div>
                <div>
                  <div
                    href="#!"
                    className=" dark:text-neutral-200 text-white font-cabin-condensed text-35 text-3xl"
                  >
                    Drone Zone
                  </div>
                </div>
                <div className="flex flex-row justify-center items-center mt-6">
                  <img src={facebook} alt="" />
                  <img className="mx-2" src={twitter} alt="" />
                  <img className="" src={divnkedIn} alt="" />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="mb-2.5 font-lato font-bold text-xl  text-neutral-800 dark:text-neutral-200">
                About
              </div>

              <ul className="mb-0 flex flex-col space-y-2">
                <div>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Company
                  </a>
                </div>
                <div>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Contact Us
                  </a>
                </div>
                <div>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Terms and Services
                  </a>
                </div>
                <div>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Privacy and Podivcy
                  </a>
                </div>
              </ul>
            </div>

            <div className="mb-6">
              <div className="mb-2.5 font-lato font-bold text-xl  text-neutral-800 dark:text-neutral-200">
                Product
              </div>

              <ul className="mb-0  flex flex-col space-y-2">
                <div>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Categories
                  </a>
                </div>
                <div>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Pricing
                  </a>
                </div>
                <div>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Testimonials
                  </a>
                </div>
              </ul>
            </div>

            <div className="mb-6">
              <div className="mb-2.5 font-lato font-bold text-xl  text-neutral-800 dark:text-neutral-200">
                Discover
              </div>

              <ul className="mb-0  flex flex-col space-y-2">
                <div>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Teams
                  </a>
                </div>
                <div>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Partners
                  </a>
                </div>
                <div>
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Career
                  </a>
                </div>
              </ul>
            </div>
            <div className="mb-6">
              <div className="mb-2.5 font-lato font-bold text-xl  text-neutral-800 dark:text-neutral-200">
                Get in touch
              </div>

              <div className="mb-0  flex flex-col space-y-2">
                <div className="flex justify-start max-md:justify-center">
                  <div
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Contact
                  </div>
                </div>
                <div className="flex flex-row space-x-2  items-center max-md:justify-center">
                  <div className="text-customGreen">
                    <FaPhoneAlt />
                  </div>
                  <div className="text-white">+91 988402391</div>
                </div>

                <div className="flex justify-start max-md:justify-center">
                  <div
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Email
                  </div>
                </div>
                <div className="flex flex-row space-x-2  items-center max-md:justify-center">
                  <div className="text-customGreen">
                    <MdEmail />
                  </div>
                  <div className="text-white">hello@dronezone.com</div>
                </div>
                <div className="flex justify-start max-md:justify-center">
                  <a
                    href="#!"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Location
                  </a>
                </div>
              </div>
              <div className="flex flex-row space-x-2  items-center max-md:justify-center">
                <div className="text-customGreen">
                  <CiLocationOn />
                </div>
                <div className="text-white">
                  273/3 Vishnupuri, Sector 14, Dwarka, Delhi, India, 110024
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-white">.</div>
        <div className=" p-2 w-full flex items-center flex-row">
          <div className="   left-0 text-neutral-700  dark:text-neutral-200">
            © 2023 All rights reserved
          </div>
          <div className="flex right-4 flex-row md:absolute text-white gap-16">
            <div className="">Privacy Policy</div>
            <div className="">Website terms</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
