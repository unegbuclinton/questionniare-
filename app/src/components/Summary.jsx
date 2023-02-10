import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { submitAllQuestions } from "../features/QuestionniareSlice";
import { emailSchema } from "../validation/Schema";
import InputField from "./Input";

const Summary = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { questionAnswers, allQuestion } = useSelector(
    (state) => state.questions
  );
  // const [activeButton, setActiveButton] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: emailSchema,
    onSubmit: (values) => {
      console.log(values);
      const body = {
        userFirstName: "Eduardo",
        userLastName: "Oliveira",
        email: formik.values.email,
        AnswerItem: questionAnswers,
      };
      dispatch(submitAllQuestions(body));
      navigate("/thank-you");
    },
  });

  // if (formik.errors.email?.length === 0) {
  //   setActiveButton(true);
  // }

  return (
    <div className="h-screen overflow-auto px-4 lg:px-60 py-24 bg-[#EEF0EB]">
      <h1 className="text-2xl text-blue-sapphire font-bold mb-5">Summary</h1>
      <div className=" bg-white rounded py-10">
        <div className=" flex justify-between mx-5 text-base lg:text-2xl py-3 px-5 border-b-2 border-rich-black">
          <h2>Rate yourself on the 17 entrepreneurial strategies</h2>
          <h2> Score</h2>
        </div>

        {allQuestion?.map(({ Title, Question, Id }, idx) => {
          return (
            <div
              key={idx}
              className=" flex justify-between mx-8 text-base gap-4 lg:text-xl pt-5 pb-4 px-5 border-b border-rich-black"
            >
              <div className="flex justify-between gap-5">
                <span>{Id} .</span>
                <div className="flex flex-col">
                  <h3 className="font-bold mb-4">{Title}</h3>
                  <h2>{Question}</h2>
                </div>
              </div>
              <div>
                {questionAnswers.map(({ score }, idx) => {
                  if (idx === Id - 1)
                    return (
                      <h3 key={idx} className="mr-6">
                        {score}
                      </h3>
                    );
                  return null;
                })}
              </div>
            </div>
          );
        })}
      </div>

      <form onSubmit={formik.handleSubmit} className="relative">
        <InputField
          placeholder="Email Address"
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <button
          type="submit"
          className={`absolute right-0 bottom-14 p-3 md:px-8 md:py-4 text-base font-bold bg-blue-sapphire ${
            !formik.dirty ? "disabled:opacity-25" : ""
          } text-[#fff] border rounded-lg transition duration-200 hover:bg-blue-sapphire-hover`}
        >
          Send
        </button>
        <p className="text-blue-grey pt-5 text-xl">
          Receive your Report via Mail
        </p>
      </form>
    </div>
  );
};

export default Summary;
