import React from "react";
import logo from "../assets/short-logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#0f0d32] lg:px-14">
      <div>
        <div className="flex gap-4 md:place-self-center pt-8 text-white justify-center">
        <a href="https://www.facebook.com/deshcareer" className="border-2 rounded-lg  p-2  hover:text-gray-400 hover:border-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>

          <a href="https://www.youtube.com/channel/UCQB33GJ0C3pL3IpxpVFQS2Q" className="border-2 rounded-lg p-2  hover:text-gray-400 hover:border-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a href="/" className="border-2 rounded-lg p-2 hover:text-gray-400 hover:border-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="footer flex justify-between p-8 text-[#8c94b8]">
        <div className="lg:w-1/3">
          <img className="w-48" src={logo} alt="" />
          <p className="text-base">
            Desh Career is Career based newsletter in Bengali language. This
            newsletter has published weekly. This is published in every Saturday
            at 12.00 PM.{" "}
          </p>
        </div>
        <div className="lg:w-1/3 flex justify-center">
          <div className="text-center">
            <h4 className="text-2xl pb-8 text-[#d5d5d5] font-medium">
              Privacy And Terms
            </h4>
            <div>
              <Link to="" className="text-base hover:text-white">
                Privacy Policy
              </Link>
            </div>
            <div className="py-3">
              <Link to="" className="text-base  hover:text-white">
                Terms Condition
              </Link>
            </div>
            <Link to="" className="text-base hover:text-white">
              FAQ
            </Link>
          </div>
        </div>
        <div className="lg:w-1/3 flex justify-end">
          <div className="text-end">
            <h4 className="text-2xl pb-8 text-[#d5d5d5] font-medium">
              Support
            </h4>

            <div>
              {" "}
              <Link className="text-base hover:text-white">
                Affiliate Link
              </Link>
            </div>

            <div className="py-3">
              <Link className="text-base hover:text-white">Contact us</Link>
            </div>

            <div>
              {" "}
              <Link className="text-base hover:text-white">
                Advertise with us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer px-10  text-white py-4 border-t-2 border-[#8c94b8]">
        <div className="items-center grid-flow-col">
          <p>© 2023 Newsletter E-mail Service: All Copy right reserved</p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <ul className="flex gap-4">
            <li>Terms</li>
            <li>Cookie Policy</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
