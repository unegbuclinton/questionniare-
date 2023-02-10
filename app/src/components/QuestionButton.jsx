import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateScore } from "../features/QuestionniareSlice";

const QuestionButton = ({ btns, id, updateBtn }) => {
  const [activeTab, setActiveTab] = useState(5);
  const dispatch = useDispatch();
  return (
    <>
      {btns?.map((score, index) => {
        console.log(index);
        return (
          <button
            key={index}
            onClick={() => {
              setActiveTab(index);
              dispatch(updateScore({ questionnaireItemId: id, score }));
              updateBtn();
            }}
            className={`w-[20px] h-[20px] p-7 ${
              activeTab === index && "bg-blue-sapphire-hover"
            } flex justify-center items-center cursor-pointer md:p-15 mt-10 rounded-full bg-[#ccc] md:w-[50px] md:h-[50px] text-xl hover:bg-blue-sapphire-hover hover:text-[#ccc] text-bold`}
          >
            {score}
          </button>
        );
      })}
    </>
  );
};

export default QuestionButton;
