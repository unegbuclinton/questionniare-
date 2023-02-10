import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getQuestions, submitQuestions } from "../func";

const initialState = {
  allQuestion: [],
  questionAnswers: [],
  isLoading: false,
  questionIndex: 0,
  activeState : 0
};

export const getAllQuestions = createAsyncThunk(
  "questionniare/allQuestionniare",
  getQuestions
);

export const submitAllQuestions = createAsyncThunk(
  "questionniare/submitQuestion",
  submitQuestions
);
export const questionnireSlice = createSlice({
  name: "questionniare",
  initialState,
  reducers: {
    updateScore: (state, action) => {
      const { questionnaireItemId, score } = action.payload;
      const index = state.questionAnswers.findIndex(
        (item) => item.questionnaireItemId === questionnaireItemId
      );
      if (index !== -1) {
        state.questionAnswers[index] = { questionnaireItemId, score };
      } else {
        state.questionAnswers.push({ questionnaireItemId, score });
      }
    },

    nextQuestion: (state) => {
      if (state.questionIndex === state.allQuestion.length - 1) {
        return state.allQuestion.length - 1;
      }
      state.questionIndex++;
    },

    prevQuestion: (state) => {
      if (state.questionIndex === 0) {
        return state.questionIndex;
      }
      state.questionIndex--;
    },

    setActiveState:(state,action)=>{
      state.activeState = action.payload
    }
  },
  extraReducers: {
    [getAllQuestions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.allQuestion = action.payload;
    },
    [getAllQuestions.rejected]: (state) => {
      state.isLoading = false;
    },
    [getAllQuestions.pending]: (state) => {
      state.isLoading = true;
    },

    [submitAllQuestions.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [submitAllQuestions.rejected]: (state) => {
      state.isLoading = false;
    },
    [submitAllQuestions.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export const { updateScore, nextQuestion,setActiveState, prevQuestion } =
  questionnireSlice.actions;
export default questionnireSlice.reducer;
