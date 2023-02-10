import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profileInfo: [],
};

export const profileInfoSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    profileInfo: (state, action) => {
      const { firstName, lastName, comapny, email } = action.payload;
      state.profileInfo.push({ firstName, lastName, comapny, email });
    },
  },
});

export const { profileInfo } = profileInfoSlice.actions;
export default profileInfoSlice.reducer;
