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
  const questions = allQuestion.questionnarieItems;

  return (
    <div className="h-screen px-5 pt-[28rem] py-16 overflow-auto flex flex-col justify-center items-center bg-[#EEF0EB] lg:pt-16 text-center">
      <img src={img} alt="" className="mb-10 w-40" />
      {questions?.length > 1 && (
        <p className="text-center text-xl font-medium mb-5">
          Question {questionIndex + 1}
        </p>
      )}
      <h1 className="text-lg md:text-xl lg:text-2xl mb-6">
        Rate Yourself On The 17 Key
        <span className="font-bold"> Entrepreneurial Strategies</span>
      </h1>
      {questions?.length < 1 && (
        <img className="w-12 animate-spin" src={loadimgImg} alt="" />
      )}
      <div>
        <h2 className="text-base md:text-lg lg:text-lg">
          {questions[questionIndex]?.Title}
        </h2>
        <p className="text-base md:text-lg font-bold mt-10">
          {questions[questionIndex]?.Question}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <QuestionButton
            id={questions[questionIndex]?.score}
            btns={questionNum}
          />
        </div>

        <div className=" flex justify-between w-full mt-20 ">
          <Button
            onClick={() => {
              dispatch(prevQuestion());
            }}
            display={questionIndex === 0 ? "invisible" : "block"}
            invert
            text="Back"
            borderColor="border-[#000]"
            textColor="text-[#171C3]"
            scale="scale-90"
            hoverBackground="bg-[#6174D3]"
          />
          {questionIndex !== questions?.length - 1 ? (
            <Button
              onClick={() => {
                dispatch(nextQuestion());
              }}
              disabled={questions[questionIndex].score ? false : true}
              text="Next"
              textColor="text-[#fff]"
              scale="scale-90"
              backgroundColor="bg-[#000F1F]"
              hoverBackground="bg-[#6174D3]"
            />
          ) : (
            <Button
              onClick={submitBtn}
              disabled={questions[questionIndex].score ? false : true}
              text="Finish"
              textColor="text-[#fff]"
              scale="scale-90"
              backgroundColor="bg-[#000F1F]"
              hoverBackground="bg-[#6174D3]"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
