import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  homeData: null,
};

export const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers: {
    setHomeData: (state, action) => {
      const { payload } = action;
      state.homeData = payload;
    },
  },
});

export const { setHomeData } = homeSlice.actions;

export default homeSlice.reducer;
