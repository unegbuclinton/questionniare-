import React from "react";
import { useNavigate } from "react-router";
import img from "../images/questionniare.png";
import Button from "./Button";
import QuestionButton from "./QuestionButton";

const Questionnaire = () => {
  const questionNum = Array.from({ length: 10 }, (_, i) => i + 1);
  const navigate = useNavigate();

  return (
    <div className="h-screen px-5 pt-[28rem] py-16 overflow-auto flex flex-col justify-center items-center bg-[#EEF0EB] lg:pt-28 text-center">
      <img src={img} alt="" className="mb-10" />
      <h1 className="text-2xl md:text-4xl lg:text-4xl mb-6">
        Rate Yourself On The 17 Key{" "}
        <span className="font-bold">Entrepreneurial Strategies</span>{" "}
      </h1>
      <h2 className="text-xl md:text-2xl lg:text-3xl">
        Clarity On And Emotional Attachment Is A big Idea
      </h2>

      <p className="text-base md:text-2xl font-bold mt-10">
        Where Am I Heading? Am I Completely On What I want The Most?
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {questionNum.map((num, idx) => {
          return <QuestionButton key={idx} value={num} />;
        })}
      </div>

      <div className=" flex justify-between w-full mt-20 md:px-48">
        <Button
          onClick={() => navigate("/first-step")}
          text="Back"
          borderColor="border-[#171C3]"
          scale="scale-90"
          hoverBackground="bg-[#6174D3]"
        />
        <Button
          onClick={() => navigate("/questionniare")}
          text="Next"
          textColor="text-[#fff]"
          scale="scale-90"
          hoverBackground="bg-[#6174D3]"
        />
      </div>
    </div>
  );
};

export default Questionnaire;
