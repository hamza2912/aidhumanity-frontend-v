import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fundraisedAppeal: null,
  campaign: null,
  popularDonations: [],
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
    setPopularDonations: (state, action) => {
      const { payload } = action;
      state.popularDonations = payload;
    },
  },
});

export const { updateFundraisedAppeal, updateCampaign, setPopularDonations } =
  appealSlice.actions;

export default appealSlice.reducer;
