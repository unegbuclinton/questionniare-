import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email("Invalid Email").required("Email is Required"),
  password: Yup.string().required("Password is Required"),
});

export const profileSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("First name is required"),
  lastName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Last name is required"),
  company: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Comapany name is required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
});
