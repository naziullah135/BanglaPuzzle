import React from 'react';
import emailIcon from "../assets/mail.svg";

const Hero = () => {
    return (
        <div className="px-14 m-12">
             <h1 className="text-6xl font-bold font-sans">
        Get Smarter about your <br /> career
      </h1>
      <p className="pt-7">
        Get the <span className="font-bold"> 5-minute newsletter </span>keeping
        about smart career
      </p>
      <div className="join pt-5 shadow-md lg:w-1/2">
        <img src={emailIcon} alt="" />
        <input className="input ms-2" placeholder="Your E-mail address" />
        <button className="btn bg-[#DC3545] text-white">
          Join Free
        </button>
      </div>
      <p className='pt-5 pb-16'>
        We're committed to your privacy. DashCareer uses the information you
        provide to contact you about <br /> our relevant content and services.
        You may unsubscribe from these communications at any time. For <br />{" "}
        more information, check out our Privacy Policy.
      </p>
        </div>
    );
};

export default Hero;