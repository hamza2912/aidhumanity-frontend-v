import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fundraisedAppeal: null,
  campaign: null,
};

export const appealSlice = createSlice({
  name: 'appealInfo',
  initialState,
  reducers: {
    updateFundraisedAppeal: (state, action) => {
      const { payload } = action;
      state.fundraisedAppeal = payload;
    },
    updateCampaign: (state, action) => {
      const { payload } = action;
      state.campaign = payload;
    },
  },
});

export const { updateFundraisedAppeal, updateCampaign } = appealSlice.actions;

export default appealSlice.reducer;
