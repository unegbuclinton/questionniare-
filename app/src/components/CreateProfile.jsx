import React from "react";
import { useNavigate } from "react-router";
import InputField from "./Input";

const CreateProfile = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <div className="bg-[#EEF0EB] h-screen">
      <div className="p-5 flex flex-col justify-center items-center h-screen  lg:p-96">
        <h1 className="text-3xl w-full font-bold mb-10 text-center text-[#171C33]">
          Create Profile
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-[#F2F2F2] p-9 pb-12 rounded-xl"
        >
          <InputField placeholder="First Name" />
          <InputField placeholder="Last Name" />
          <InputField placeholder="Company Name" />
          <InputField placeholder="Email" />
          <button
            type="submit"
            className="w-full bg-[#171C33] rounded-lg text-[#fff] h-20 font-bold text-2xl"
          >
            Start
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
