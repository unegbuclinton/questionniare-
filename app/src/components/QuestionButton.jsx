import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveState, updateScore } from "../features/QuestionniareSlice";

const QuestionButton = ({ btns, id, updateBtn }) => {
  const dispatch = useDispatch();
  const {activeState}=useSelector(state=>state.questions)
  return (
    <>
      {btns?.map((score, index) => {
        console.log(id,score)
        return (
          <button
            key={index}
            onClick={() => {
              dispatch(setActiveState(index))
              dispatch(updateScore({ questionnaireItemId: id, score }));
              updateBtn();
            }}
            className={`w-[20px] h-[20px] p-7 ${
              activeState === index ? "bg-blue-sapphire-hover" : "bg-mikl-grey"
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
