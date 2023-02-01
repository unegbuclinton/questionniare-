import React, { useContext } from "react";
import Button from "./Button";
import img from "../images/web.png";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/contextApi";

const Welcome = () => {
  const naviagte = useNavigate();

  const { getAllQuestions } = useContext(AppContext);

  const nextStep = () => {
    console.log("first");
    getAllQuestions();
    naviagte("first-step");
  };
  return (
    <div className="h-screen overflow-auto bg-[#EEF0EB] flex flex-col p-5 pt-36 justify-center md:pt-64 lg:py-40  ">
      <div className=" flex flex-col-reverse lg:flex-row max-w-6xl my-0 mx-auto">
        <div className="text-[#000F1F] ">
          <h1 className="text-2xl mt-20 font-bold md:text-6xl lg:w-11/12 md:leading-[70px]  ">
            <span className="text-[#59DCB5] md:text-3xl">Welcome to</span>
            <br /> Entrepreneurial Profile
          </h1>
          <p className="text-base md:text-2xl mt-5 lg:w-10/12 ">
            The main game of the entrepreneur is build a business that will
            eventually work without them being there - so they can have MORE
            Financial Freedom, Flexibility, Family time & Fun.
          </p>
        </div>
        <img src={img} alt="" className=" md:w-3/5 object-contain" />
      </div>

      <div className="mt-10 lg:ml-48 ">
        <Button
          onClick={nextStep}
          text="Get started"
          hoverBackground="bg-[#fff]"
          hoverTextColor="text-[#000]"
        />
      </div>
    </div>
  );
};

export default Welcome;
