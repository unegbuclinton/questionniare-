import React from "react";
import { useDispatch } from "react-redux";
import { updateScore } from "../features/QuestionniareSlice";

const QuestionButton = ({ btns, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      {btns?.map((score, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              dispatch(updateScore({ score }));
            }}
            className={`w-[20px] h-[20px] p-7 ${
              id - 1 === index ? "bg-blue-sapphire-hover" : "bg-mikl-grey"
            } flex justify-center items-center cursor-pointer shadow-xl md:p-15 mt-10 rounded-full md:w-[50px] md:h-[50px] text-xl hover:bg-blue-sapphire-hover hover:text-[#ccc] text-bold`}
          >
            {score}
          </button>
        );
      })}
    </>
  );
};

export default QuestionButton;
