import React from "react";
import emailIcon from "../assets/mail.svg";

const Hero = () => {
  return (
    <div className="lg:px-14 mt-20 m-12">
      <h1 className="text-6xl font-bold font-sans">
        Get Smarter about your <br /> career
      </h1>
      <p className="pt-7">
        Get the <span className="font-bold"> 5-minute newsletter </span>keeping
        about smart career
      </p>
      <div className="join lg:p-2 mt-3 shadow-md justify-between sm:w-full lg:w-2/3">
        <img className="ps-2" src={emailIcon} alt="" />
        <input
          className="input focus:outline-none"
          placeholder="Your E-mail address" required
        />
        <button className="btn bg-[#DC3545] w-1/4 text-white">Join Free</button>
      </div>
      <p className="pt-5 pb-16">
        We're committed to your privacy. DashCareer uses the information you
        provide to contact you about <br /> our relevant content and services.
        You may unsubscribe from these communications at any time. For <br />{" "}
        more information, check out our Privacy Policy.
      </p>
    </div>
  );
};

export default Hero;
