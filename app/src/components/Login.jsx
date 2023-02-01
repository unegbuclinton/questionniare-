import React from "react";
import InputField from "./Input";
const Login = () => {
  return (
    <div className="bg-[#EEF0EB] h-screen">
      <div className="p-5 flex flex-col justify-center items-center h-screen  lg:p-20">
        <h1 className="text-3xl w-full font-bold mb-10 text-center text-[#171C33]">
          Login
        </h1>
        <form className="bg-[#F2F2F2] p-9 pb-12 rounded-xl">
          <InputField placeholder="First Name" />
          <InputField placeholder="Last Name" />
          <button
            type="submit"
            className="w-full bg-[#171C33] rounded-lg text-[#fff] h-20 font-bold text-2xl"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
