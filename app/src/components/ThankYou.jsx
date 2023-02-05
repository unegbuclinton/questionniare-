import React from "react";
import img from "../images/thankyou.png";

const ThankYou = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center p-15 text-center bg-[#EEF0EB]">
      <img src={img} alt="" className="w-64" />
      <h1 className="text-xl md:text-2xl font-medium">
        Thank You For Completing The Entrepreneurial Profile
      </h1>
      <p className="text-base md:text-xl font-semibold mt-8">
        We have sent your report via email.
      </p>
    </div>
  );
};

export default ThankYou;
