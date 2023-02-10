import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router";
import { loginDetails } from "../locale";
import { loginSchema } from "../validation/Schema";
import ErrorMessage from "./ErrorMessage";
import InputField from "./Input";
const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      if (
        values.email === loginDetails.userName &&
        values.password === loginDetails.password
      ) {
        console.log("Logged In sucessful");
        navigate("/admin-dashboard");
      } else {
        console.log("credentials is not correct ");
      }
    },
  });
  return (
    <div className="bg-[#EEF0EB] h-screen">
      <div className="p-5 flex flex-col justify-center items-center h-screen  lg:p-20">
        <h1 className="text-5xl w-full font-bold mb-10 text-center text-[#171C33]">
          Login
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          className="w-full bg-[#F2F2F2] p-9 pb-12 rounded-xl md:w-2/4"
        >
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
          <InputField
            placeholder="Password"
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <ErrorMessage>{formik.errors.password}</ErrorMessage>
          ) : null}
          <div className="flex justify-center">
            <button
              type="submit"
              className="h-16 w-2/5 bg-[#171C33] rounded-lg text-[#fff]  font-bold text-lg mt-10"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
