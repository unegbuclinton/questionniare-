import { useFormik } from "formik";
import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { submitAllQuestions } from "../features/QuestionniareSlice";
import { emailSchema } from "../validation/Schema";
import Button from "./Button";
import ErrorMessage from "./ErrorMessage";
import InputField from "./Input";

const Summary = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { questionAnswers, allQuestion } = useSelector(
    (state) => state.questions
  );
  const questions = allQuestion?.questionnarieItems;
  const { profileInfo } = useSelector((state) => state.profile);
  const formik = useFormik({
    initialValues: {
      email: profileInfo.email || "",
    },
    validationSchema: emailSchema,
    onSubmit: () => {
      const body = {
        userFirstName: profileInfo.firstname || "",
        userLastName: profileInfo.lastName || "",
        email: formik.values.email,
        AnswerItem: questionAnswers,
      };
      dispatch(submitAllQuestions(body)).then((data) => {
        if (data.payload.status === 200) {
          toast.success("Sent Sucessfully");
          navigate("/thank-you");
        } else {
          toast.error("An error ocurred");
        }
      });
    },
  });
  return (
    <div className="h-screen overflow-auto px-4 lg:px-60 py-24 bg-[#EEF0EB]">
      <h1 className="text-2xl text-blue-sapphire font-bold mb-5">Summary</h1>
      <div className=" bg-white rounded py-10">
        <div className=" flex justify-between lg:mx-5 text-base lg:text-2xl py-3 px-5 border-b-2 border-rich-black">
          <h2>Rate yourself on the 17 entrepreneurial strategies</h2>
          <h2> Score</h2>
        </div>

        {questions?.map(({ Title, Question, Id, score }, idx) => {
          return (
            <div
              key={idx}
              className=" flex justify-between items-center lg:mx-8 text-base gap-4 lg:text-xl pt-5 pb-4 px-5 border-b border-rich-black"
            >
              <div className="flex justify-between gap-7">
                <span>{Id} </span>
                <div className="flex flex-col">
                  <h3 className="font-bold mb-4 text-blue-sapphire-hover">
                    {Title}
                  </h3>
                  <h2 className="text-blue-grey font-medium">{Question}</h2>
                </div>
              </div>
              <div>
                <h3 key={idx} className="mr-6">
                  {score}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      <form onSubmit={formik.handleSubmit}>
        <InputField
          placeholder="Email Address"
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <div>
          {formik.touched.email && formik.errors.email ? (
            <ErrorMessage className="text-[#FF0000] mt-4 text-base font-medium">
              {formik.errors.email}
            </ErrorMessage>
          ) : null}
        </div>

        <p className="text-blue-grey pt-5 text-xl">
          Receive your Report via Mail
        </p>

        <div className=" flex justify-between w-full mt-20 ">
          <Button
            type="button"
            onClick={() => {
              navigate("/questionniare");
            }}
            invert
            text="Back"
            borderColor="border-[#000]"
            textColor="text-[#171C3]"
            scale="scale-90"
            hoverBackground="bg-[#6174D3]"
          />

          <Button
            type="submit"
            text="Send"
            borderColor="border-[#000]"
            textColor="text-[#171C3]"
            scale="scale-90"
            hoverBackground="bg-[#6174D3]"
          />
        </div>
      </form>
    </div>
  );
};

export default Summary;
