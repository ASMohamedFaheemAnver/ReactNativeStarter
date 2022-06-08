import {createSlice} from '@reduxjs/toolkit';

export const applicationSlice = createSlice({
  name: 'application',
  initialState: {
    language: 'english',
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action?.payload;
    },
  },
});

export const {changeLanguage} = applicationSlice.actions;

export default applicationSlice.reducer;
