import React from "react";

const Button = ({ text, onClick, invert }) => {
  const regular =
    "p-4 md:px-8 md:py-4 text-lg font-bold bg-[#000F1F] text-[#fff] border rounded-lg transition  hover:text-[#000F1F] hover:bg-[#fff]";

  const inverted =
    "p-4 md:px-8 md:py-4 text-lg font-bold text-[#000] border border-[#000] rounded-lg transition  hover:bg-[#000F1F] hover:text-[#fff]";

  return (
    <button onClick={onClick} className={invert ? inverted : regular}>
      {text}
    </button>
  );
};

export default Button;
