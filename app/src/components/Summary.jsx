import React from "react";
import { useNavigate } from "react-router";
import InputField from "./Input";

const Summary = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen px-4 lg:px-72 py-24 bg-[#EEF0EB]">
      <h1 className="text-2xl text-blue-sapphire font-bold mb-5">Summary</h1>
      <div className=" bg-white rounded py-10">
        <div className=" flex justify-between mx-5 text-base lg:text-2xl py-3 px-5 border-b-2 border-rich-black">
          <h2>Rate yourself on the 17 entrepreneurial strategies</h2>
          <h2> Score</h2>
        </div>
        <div className=" flex justify-between mx-8 text-base lg:text-xl pt-10 pb-4 px-5 border-b border-rich-black">
          <h3>Clarity on and emotional attachment is a big idea?</h3>
          <h3 className="mr-6"> 8</h3>
        </div>
        <div className=" flex justify-between mx-8 text-base lg:text-xl pt-10 pb-4 px-5 border-b border-rich-black">
          <h3>where am i heading? am i completely on what i want the most</h3>
          <h3 className="mr-6"> 7</h3>
        </div>
        <div className=" flex justify-between mx-8 text-base lg:text-xl pt-10 pb-4 px-5 border-b border-rich-black">
          <h3>Title question</h3>
          <h3 className="mr-6"> 9</h3>
        </div>
      </div>

      <form className="relative">
        <InputField placeholder="Email Address" />
        <button
          onClick={() => navigate("/thank-you")}
          className=" absolute right-0 bottom-14 p-3 md:px-8 md:py-4 text-base font-bold bg-blue-sapphire text-[#fff] border rounded-lg transition duration-200 hover:bg-blue-sapphire-hover"
        >
          Send
        </button>
        <p className="text-blue-grey pt-5 text-xl">
          Receive your Report via Mail
        </p>
      </form>
    </div>
  );
};

export default Summary;
