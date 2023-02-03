import React from "react";

const Button = ({ text, scale, onClick, borderColor }) => {
  return (
    <button
      onClick={onClick}
      className={`p-4 md:px-8 md:py-4 text-lg font-bold bg-[#000F1F] text-[#fff] border rounded-lg transition hover:${borderColor}  hover:text-[#000F1F] hover:bg-[#fff] hover:${scale} `}
    >
      {text}
    </button>
  );
};

export default Button;
