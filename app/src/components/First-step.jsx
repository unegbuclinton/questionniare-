import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const FirstStep = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center overflow-auto bg-[#EEF0EB] h-screen flex items-center p-4 md:p-10 ">
      <div className="max-w-5xl my-0 mx-auto ">
        <h1 className="text-lg font-normal md:text-2xl  md:font-normal">
          In The Following Analysis Of Your Business, <br /> <br />
          All scores should be honest and true if you are to gain a correct
          reading on your entrepreneurial skills so you can learn from and
          leverage off them. Bear in the mind the 11th commandment:{" "}
        </h1>

        <h2 className="text-base font-semibold md:text-2xl md:font-bold mt-7">
          ‘THOU SHALT NOT KID THYSELF’
        </h2>

        <div className="flex justify-between w-full mt-20">
          <Button
            onClick={() => navigate("/")}
            text="Back"
            borderColor="border-[#000]"
            scale="scale-90"
            hoverBackground="bg-[#6174D3]"
          />
          <Button
            onClick={() => navigate("/questionniare")}
            text="Next"
            scale="scale-90"
            textColor="text-[#fff]"
            backgroundColor="bg-[#171C33]"
            hoverBackground="bg-[#6174D3]"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
