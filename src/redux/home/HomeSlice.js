import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  homeData: null,
  categories: [],
};

export const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers: {
    setHomeData: (state, action) => {
      const { payload } = action;
      state.homeData = payload;
    },
    setCategories: (state, action) => {
      const { payload } = action;
      state.categories = payload;
    },
  },
});

export const { setHomeData, setCategories } = homeSlice.actions;

export default homeSlice.reducer;
