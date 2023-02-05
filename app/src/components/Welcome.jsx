import React from "react";
import Button from "./Button";
import img from "../images/web.png";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

const Welcome = () => {
  const naviagte = useNavigate();

  const nextStep = () => {
    naviagte("first-step");
  };
  return (
    <div className="h-screen overflow-auto bg-[#EEF0EB] flex flex-col p-5 pt-36 justify-center md:pt-64 lg:py-16  ">
      <div className=" flex flex-col-reverse lg:flex-row max-w-6xl my-0 mx-auto">
        <div className="text-[#000F1F] ">
          <img src={logo} alt="" className="w-1/4 object-cover" />
          <h1 className="text-2xl mt-20 font-bold md:text-6xl lg:w-11/12 md:leading-[70px]  ">
            <span className="text-blue-sapphire md:text-3xl">Welcome to</span>
            <br /> Entrepreneurial Profile
          </h1>
          <p className="text-base md:text-2xl mt-5 lg:w-10/12 ">
            The main game of the entrepreneur is build a business that will
            eventually work without them being there - so they can have MORE
            Financial Freedom, Flexibility, Family time & Fun.
          </p>
          <div className="mt-10 ">
            <Button onClick={nextStep} text="Get started" />
          </div>
        </div>
        <img src={img} alt="" className=" md:w-2/5 object-contain" />
      </div>
    </div>
  );
};

export default Welcome;
