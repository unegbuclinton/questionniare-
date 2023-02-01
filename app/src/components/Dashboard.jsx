import React from "react";
import Button from "./Button";
import InputField from "./Input";

const Dashboard = () => {
  return (
    <div className="h-screen px-96 bg-[#EEF0EB]">
      <div className="flex  justify-between items-center pt-20">
        <p className="text-2xl">Admin Dashboard</p>
        <Button text="New Profile" />
      </div>

      <form className="mt-36" action="">
        <InputField placeholder="Initial step" />
        <InputField placeholder="Final step" />

        <div className="flex justify-end">
          <Button text="Save" />
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
