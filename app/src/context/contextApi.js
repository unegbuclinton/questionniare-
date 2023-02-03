import { getQuestions } from "../func";

const { createContext } = require("react");

const AppContext = createContext();

export function QuestionniareContext({ children }) {
  const getAllQuestions = () => {
    const url = "api/GetQuestionnaire";
    try {
      getQuestions(url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        getAllQuestions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
