import React from "react";

const Button = ({
  text,
  hoverBackground,
  hoverTextColor,
  backgroundColor,
  scale,
  onClick,
  textColor,
  borderColor,
}) => {
  return (
    <button
      onClick={onClick}
      className={`p-5 md:px-8 md:py-4 font-bold ${backgroundColor} ${textColor} border rounded-lg transition ${borderColor}  hover:${hoverTextColor} hover:${hoverBackground} hover:${scale} `}
    >
      {text}
    </button>
  );
};

export default Button;
