import React from "react";
import { useNavigate } from "react-router";
import Button from "./Button";
import InputField from "./Input";
import Table from "./table-component";
import logoutImg from "../images/logout-logo.png";
import { persistor } from "../store";
import { toast } from "react-hot-toast";

const Dashboard = () => {
  const navigate = useNavigate();
  const logout = () => {
    toast.success("Logout successfully");
    persistor.purge();
    navigate("/admin-login");
  };
  return (
    <div className="h-screen overflow-auto px-4 lg:px-72 bg-[#EEF0EB]">
      <div className="flex justify-end pt-6">
        <button
          onClick={logout}
          className=" flex gap-3 font-bold text-2xl text-rich-black"
        >
          LogOut <img src={logoutImg} alt="logout button" />
        </button>
      </div>
      <div className=" md:flex  justify-between items-center pt-10">
        <p className="mb-10 md:mb-0 text-2xl font-semibold">Admin Dashboard</p>
        <Button
          onClick={() => navigate("/create-profile")}
          text="New Profile"
        />
      </div>

      <form className="mt-6 md:mt-32">
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
