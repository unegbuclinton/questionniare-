import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const FirstStep = () => {
  const navigate = useNavigate();
  const { allQuestion } = useSelector((state) => state.questions);

  return (
    <div className="text-center overflow-auto bg-[#EEF0EB] h-screen flex items-center p-4 md:p-10 ">
      <div className="max-w-5xl my-0 mx-auto ">
        <h1 className="text-lg font-normal md:text-2xl  md:font-normal">
          {allQuestion?.questionnarie?.InitialStepTitle}
        </h1>
        <h2 className="text-base font-semibold md:text-2xl md:font-bold mt-7">
          {allQuestion?.questionnarie?.InitialStepContent}
        </h2>

        <div className="flex justify-between w-full mt-20">
          <Button
            onClick={() => navigate("/")}
            invert
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
