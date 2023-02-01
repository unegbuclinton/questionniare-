import React from "react";

const Button = ({
  text,
  hoverBackground,
  hoverTextColor,
  scale,
  onClick,
  borderColor,
}) => {
  return (
    <button
      onClick={onClick}
      className={`p-5 md:px-8 md:py-4 font-bold bg-[#000F1F] text-[#fff] border rounded-lg transition ${borderColor}  hover:${hoverTextColor} hover:${hoverBackground} hover:${scale} `}
    >
      {text}
    </button>
  );
};

export default Button;
