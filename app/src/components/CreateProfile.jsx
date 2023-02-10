import { useFormik } from "formik";
import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileInfo } from "../features/ProfileSlice";
import { profileSchema } from "../validation/Schema";
import ErrorMessage from "./ErrorMessage";
import InputField from "./Input";

const CreateProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
    },
    validationSchema: profileSchema,
    onSubmit: (values) => {
      const profileInfos = {
        firstName: values.firstName,
        lastName: values.lastName,
        company: values.company,
        email: values.email,
      };
      dispatch(profileInfo(profileInfos));
      toast.success("Profile Created");
      navigate("/");
    },
  });
  return (
    <div className="bg-[#EEF0EB] overflow-auto pb-10 h-screen flex flex-col justify-center items-center">
      <div className="w-full p-5 h-screen lg:w-2/4">
        <h1 className="text-3xl w-full font-bold mb-10 text-center text-[#171C33]">
          Create Profile
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white p-9 pb-12 rounded-xl"
        >
          <InputField
            placeholder="First Name"
            type="text"
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <ErrorMessage>{formik.errors.firstName}</ErrorMessage>
          ) : null}
          <InputField
            placeholder="Last Name"
            type="text"
            id="lastName"
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <ErrorMessage>{formik.errors.lastName}</ErrorMessage>
          ) : null}

          <InputField
            placeholder="Company Name"
            type="text"
            id="company"
            name="company"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.company}
          />
          {formik.touched.company && formik.errors.company ? (
            <ErrorMessage>{formik.errors.company}</ErrorMessage>
          ) : null}

          <InputField
            placeholder="Email"
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <ErrorMessage>{formik.errors.email}</ErrorMessage>
          ) : null}

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
