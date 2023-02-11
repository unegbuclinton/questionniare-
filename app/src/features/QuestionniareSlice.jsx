import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getQuestions, submitQuestions } from "../func";

const initialState = {
  allQuestion: [],
  isLoading: false,
  getAnswers: [],
  questionIndex: 0,
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
      const { score } = action.payload;
      const currentquestion =
        state.allQuestion.questionnarieItems[state.questionIndex];

      currentquestion.score = score;
    },

    getAnswers: (state, action) => {
      const { id, score } = action.payload;
      const index = state.getAnswers.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.getAnswers[index] = { id, score };
      } else {
        state.getAnswers.push({ id, score });
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
  },

  extraReducers: (builder) => {
    builder.addCase(getAllQuestions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allQuestion = action.payload;
      state.questionAnswers = action.payload.questionniareItems;
    });
    builder.addCase(getAllQuestions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllQuestions.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(submitAllQuestions.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(submitAllQuestions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(submitAllQuestions.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});
//   extraReducers: {
//     [getAllQuestions.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.allQuestion = action.payload;
//       state.questionAnswers = action.payload.questionniareItems;
//     },
//     [getAllQuestions.rejected]: (state) => {
//       state.isLoading = false;
//     },
//     [getAllQuestions.pending]: (state) => {
//       state.isLoading = true;
//     },

//     [submitAllQuestions.fulfilled]: (state) => {
//       state.isLoading = false;
//     },
//     [submitAllQuestions.rejected]: (state) => {
//       state.isLoading = false;
//     },
//     [submitAllQuestions.pending]: (state) => {
//       state.isLoading = true;
//     },
//   },
// });

export const { updateScore, nextQuestion, getAnswers, prevQuestion } =
  questionnireSlice.actions;
export default questionnireSlice.reducer;
