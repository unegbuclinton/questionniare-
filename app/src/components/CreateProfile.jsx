import React from "react";
import { useNavigate } from "react-router";
import InputField from "./Input";

const CreateProfile = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <div className="bg-[#EEF0EB] overflow-auto pb-10 h-screen flex flex-col justify-center items-center">
      <div className="p-5 h-screen w-2/4">
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
          <div className="flex justify-center">
            <button
              type="submit"
              className="h-16 w-2/5 bg-[#171C33] rounded-lg text-[#fff]  font-bold text-lg mt-10"
            >
              Start
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
