import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bodyOverflowHidden: false,
};

export const commonSlice = createSlice({
  name: 'commonSlice',
  initialState,
  reducers: {
    setBodyOverflowHidden: (state, action) => {
      const { payload } = action;
      state.bodyOverflowHidden = payload;
    },
  },
});

export const { setBodyOverflowHidden } = commonSlice.actions;

export default commonSlice.reducer;
