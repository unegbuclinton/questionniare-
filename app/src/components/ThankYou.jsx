import React from "react";

const ThankYou = () => {
  return (
    <div className="h-screen flex flex-col justify-center p-15 mt-5 text-center bg-[#EEF0EB]">
      <h1 className="text-2xl md:text-4xl font-medium">
        Thank You For Completing The Entrepreneurial Profile{" "}
      </h1>
      <p className="text-base md:text-2xl font-semibold mt-8">
        We have sent your report via email.
      </p>
    </div>
  );
};

export default ThankYou;
