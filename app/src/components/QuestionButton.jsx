import React from "react";

const QuestionButton = ({ value }) => {
  return (
    <div className=" w-[20px] h-[20px] p-7 flex justify-center items-center cursor-pointer md:p-10 mt-10 rounded-full bg-[#ccc] md:w-[50px] md:h-[50px] text-2xl hover:bg-[#171C33] hover:text-[#ccc] text-bold">
      {value}
    </div>
  );
};

export default QuestionButton;
