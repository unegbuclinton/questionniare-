import axios from "axios";

export const getQuestions = (url) => {
  axios.get(url).then((res) => {
    console.log(res.data);
  });
};
