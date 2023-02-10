import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import img from "../images/thankyou.png";
import { persistor } from "../store";

const ThankYou = () => {
  const { allQuestion } = useSelector((state) => state.questions);
  useEffect(() => {
    persistor.purge();
  });
  return (
    <div className="px-2 h-screen flex flex-col justify-center items-center p-15  lg:px-40 text-center bg-[#EEF0EB]">
      <img src={img} alt="" className="w-64" />
      <h1 className="text-xl md:text-2xl font-medium">
        {allQuestion?.questionnarie?.FinalStepTitle}
      </h1>
      <p className="text-base md:text-xl font-semibold mt-8">
        {allQuestion?.questionnarie?.InitialStepContent}
      </p>
    </div>
  );
};

export default ThankYou;
