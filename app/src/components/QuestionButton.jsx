import React from "react";

const QuestionButton = ({ value, onClick, background }) => {
  return (
    <div
      onClick={onClick}
      className={`w-[20px] h-[20px] p-7 flex justify-center ${background} items-center cursor-pointer md:p-15 mt-10 rounded-full bg-[#ccc] md:w-[50px] md:h-[50px] text-xl hover:bg-blue-sapphire-hover hover:text-[#ccc] text-bold`}
    >
      {value}
    </div>
  );
};

export default QuestionButton;
