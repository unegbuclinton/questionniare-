import React, { useState } from "react";
import hideImg from "../images/hide.png";
import showImg from "../images/show.png";
const InputField = ({
  placeholder,
  name,
  value,
  onBlur,
  onChange,
  id,
  type,
}) => {
  const [show, setShow] = useState(false);
  const toggleShowPassword = () => setShow((prev) => !prev);
  return (
    <div className="relative w-full">
      <input
        className="text-base mt-10 lg:mb-15 bg-transparent border-[#595959] transition focus:border-[#171C33] focus:border-b-2 border-b h-16 outline-none w-full p-3 text-[#171C33]"
        placeholder={placeholder}
        name={name}
        value={value}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        type={type === "password" ? (show ? "text" : "password") : type}
      />
      {type === "password" && (
        <div
          className="absolute cursor-pointer top-16 right-5"
          onClick={toggleShowPassword}
        >
          {show ? (
            <img src={hideImg} alt="hide-icon" />
          ) : (
            <img src={showImg} alt="show-icon" />
          )}
        </div>
      )}
    </div>
  );
};

export default InputField;
