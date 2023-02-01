import React from "react";

const InputField = ({ placeholder }) => {
  return (
    <input
      className="text-2xl mb-10 lg:mb-15 bg-transparent border-[#595959] rounded-lg border h-20 outline-none w-full p-3 text-[#171C33]"
      placeholder={placeholder}
    />
  );
};

export default InputField;
