import React from "react";

const InputField = ({
  placeholder,
  name,
  value,
  onBlur,
  onChange,
  id,
  type,
}) => {
  return (
    <input
      className="text-base mt-10 lg:mb-15 bg-transparent border-[#595959] transition focus:border-[#171C33] focus:border-b-2 border-b h-16 outline-none w-full p-3 text-[#171C33]"
      placeholder={placeholder}
      name={name}
      value={value}
      id={id}
      onChange={onChange}
      onBlur={onBlur}
      type={type}
    />
  );
};

export default InputField;
