import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mobileFilterShow: false,
};

export const commonSlice = createSlice({
  name: 'commonSlice',
  initialState,
  reducers: {
    bodyOverflowHidden: (state, action) => {
      const { payload } = action;
      state.mobileFilterShow = payload;
    },
  },
});

export const { bodyOverflowHidden } = commonSlice.actions;

export default commonSlice.reducer;
