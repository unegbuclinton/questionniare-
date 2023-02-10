import axios from "axios";

export const getQuestions = async () => {
  try {
    const url = "api/GetQuestionnaire";
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const submitQuestions = async (body) => {
  try {
    const url = "api/SubmitQuestionnaire";
    const response = await axios.post(url, body);
    return response;
  } catch (error) {
    return error;
  }
};
