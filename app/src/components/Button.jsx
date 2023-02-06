import React from "react";

const Button = ({ text, onClick, invert, disabled, display }) => {
  const regular = `p-4 md:px-8 md:py-4 text-base font-bold bg-blue-sapphire ${display} text-[#fff] border rounded-lg transition duration-200 hover:bg-blue-sapphire-hover`;

  const inverted = `p-4 md:px-8 md:py-4 text-base font-bold ${display} text-[#000] border border-[#000] rounded-lg transition duration-200 hover:bg-platinum `;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={invert ? inverted : regular}
    >
      {text}
    </button>
  );
};

export default Button;