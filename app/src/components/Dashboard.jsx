import React from "react";
import { useNavigate } from "react-router";
import Button from "./Button";
import InputField from "./Input";
import Table from "./table-component";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen px-4 lg:px-72 bg-[#EEF0EB]">
      <div className=" md:flex  justify-between items-center pt-10">
        <p className="mb-10 md:mb-0 text-2xl">Admin Dashboard</p>
        <Button
          onClick={() => navigate("/create-profile")}
          text="New Profile"
        />
      </div>

      <form className="mt-6 md:mt-36" action="">
        <InputField placeholder="Initial step" />
        <InputField placeholder="Final step" />
        <Table />
        <div className="flex justify-end mt-10">
          <Button text="Save" />
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
