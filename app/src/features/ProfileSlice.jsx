import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profileInfo: {},
};

export const profileInfoSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    profileInfo: (state, action) => {
      const { firstName, lastName, company, email } = action.payload;
      state.profileInfo = { firstName, lastName, company, email };
    },
  },
});

export const { profileInfo } = profileInfoSlice.actions;
export default profileInfoSlice.reducer;
