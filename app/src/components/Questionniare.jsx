import axios from "axios";
import React, { useEffect, useState } from "react";
import img from "../images/questionniare.png";
import Button from "./Button";
import QuestionButton from "./QuestionButton";
import loadimgImg from "../images/loading.png";
import { useNavigate } from "react-router";

const Questionnaire = () => {
  const [questionniares, setQuestionniares] = useState([]);

  const [indexNum, setIndexNum] = useState(0);
  const questionNum = Array.from({ length: 10 }, (_, i) => i + 1);
  const navigate = useNavigate();

  const answerBtn = (num) => {
    console.log(num);
  };
  const nextQuestion = () => {
    if (indexNum === questionniares.length - 1) {
      return setIndexNum(questionniares.length - 1);
    }
    setIndexNum(indexNum + 1);
  };

  const prevQuestion = () => {
    if (indexNum === 0) {
      return setIndexNum(0);
    }
    setIndexNum((prev) => prev - 1);
  };
  useEffect(() => {
    const getQuestions = async () => {
      const url = "api/GetQuestionnaire";
      const response = await axios.get(url);
      setQuestionniares(response.data.data.questionnarieItems);
    };
    getQuestions();
  }, []);

  const submitBtn = () => {
    console.log("Submitted");
    navigate("/summary");
  };

  return (
    <div className="h-screen px-5 pt-[28rem] py-16 overflow-auto flex flex-col justify-center items-center bg-[#EEF0EB] lg:pt-16 text-center">
      <img src={img} alt="" className="mb-10 w-40" />
      {questionniares.length > 1 && (
        <p className="text-center text-xl font-medium mb-5">
          Question {indexNum + 1}
        </p>
      )}
      <h1 className="text-lg md:text-xl lg:text-2xl mb-6">
        Rate Yourself On The 17 Key
        <span className="font-bold"> Entrepreneurial Strategies</span>
      </h1>

      {questionniares.length < 1 && (
        <img className="w-12 animate-spin" src={loadimgImg} alt="" />
      )}

      {questionniares.length > 1 &&
        questionniares.map(({ Question, Title }, index) => {
          if (index === indexNum)
            return (
              <div key={index}>
                <h2 className="text-base md:text-lg lg:text-lg">{Title}</h2>
                <p className="text-base md:text-lg font-bold mt-10">
                  {Question}
                </p>
              </div>
            );
          return null;
        })}

      <div className="flex flex-wrap justify-center gap-4">
        {questionNum.map((num, idx) => {
          return (
            <QuestionButton
              onClick={() => answerBtn(num)}
              key={idx}
              value={num}
            />
          );
        })}
      </div>

      <div className=" flex justify-between w-full mt-20 md:px-48">
        <Button
          onClick={prevQuestion}
          display={indexNum === 0 ? "invisible" : "block"}
          invert
          text="Back"
          borderColor="border-[#000]"
          textColor="text-[#171C3]"
          scale="scale-90"
          hoverBackground="bg-[#6174D3]"
        />
        {indexNum !== questionniares.length - 1 ? (
          <Button
            onClick={nextQuestion}
            text="Next"
            textColor="text-[#fff]"
            scale="scale-90"
            backgroundColor="bg-[#000F1F]"
            hoverBackground="bg-[#6174D3]"
          />
        ) : (
          <Button
            onClick={submitBtn}
            text="Submit"
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
