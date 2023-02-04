import axios from "axios";
const { createContext, useState } = require("react");

const AppContext = createContext();

export function QuestionniareContext({ children }) {
  const [questions, setQuestions] = useState([]);
  const getAllQuestions = async () => {
    const url = "api/GetQuestionnaire";
    const response = await axios.get(url);
    setQuestions(response.data.data.questionnarieItems);
  };

  return (
    <AppContext.Provider
      value={{
        getAllQuestions,
        questions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
