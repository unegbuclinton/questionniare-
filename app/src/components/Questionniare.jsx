import React from "react";
import img from "../images/questionniare.png";
import Button from "./Button";
import QuestionButton from "./QuestionButton";
import loadimgImg from "../images/loading.png";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { nextQuestion, prevQuestion } from "../features/QuestionniareSlice";

const Questionnaire = () => {
  const { allQuestion, questionIndex } = useSelector(
    (state) => state.questions
  );
  const dispatch = useDispatch();
  const questionNum = Array.from({ length: 10 }, (_, i) => i + 1);
  const navigate = useNavigate();
  const submitBtn = () => {
    navigate("/summary");
  };

  return (
    <div className="h-screen px-5 pt-[28rem] py-16 overflow-auto flex flex-col justify-center items-center bg-[#EEF0EB] lg:pt-16 text-center">
      <img src={img} alt="" className="mb-10 w-40" />
      {allQuestion?.length > 1 && (
        <p className="text-center text-xl font-medium mb-5">
          Question {questionIndex + 1}
        </p>
      )}
      <h1 className="text-lg md:text-xl lg:text-2xl mb-6">
        Rate Yourself On The 17 Key
        <span className="font-bold"> Entrepreneurial Strategies</span>
      </h1>

      {allQuestion?.length < 1 && (
        <img className="w-12 animate-spin" src={loadimgImg} alt="" />
      )}

      {allQuestion?.length > 1 &&
        allQuestion.map(({ Question, Title, Id }, index) => {
          if (index === questionIndex)
            return (
              <div key={index}>
                <h2 className="text-base md:text-lg lg:text-lg">{Title}</h2>
                <p className="text-base md:text-lg font-bold mt-10">
                  {Question}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <QuestionButton id={Id} btns={questionNum} />
                </div>
              </div>
            );
          return null;
        })}

      <div className=" flex justify-between w-full mt-20 md:px-48">
        <Button
          onClick={() => dispatch(prevQuestion())}
          display={questionIndex === 0 ? "invisible" : "block"}
          invert
          text="Back"
          borderColor="border-[#000]"
          textColor="text-[#171C3]"
          scale="scale-90"
          hoverBackground="bg-[#6174D3]"
        />
        {questionIndex !== allQuestion?.length - 1 ? (
          <Button
            onClick={() => dispatch(nextQuestion())}
            text="Next"
            textColor="text-[#fff]"
            scale="scale-90"
            backgroundColor="bg-[#000F1F]"
            hoverBackground="bg-[#6174D3]"
          />
        ) : (
          <Button
            onClick={submitBtn}
            text="Finish"
            textColor="text-[#fff]"
            scale="scale-90"
            backgroundColor="bg-[#000F1F]"
            hoverBackground="bg-[#6174D3]"
          />
        )}
      </div>
    </div>
  );
};

export default Questionnaire;
