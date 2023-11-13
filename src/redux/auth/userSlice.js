import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  dashboardInfo: {},
  loading: false,
  dataLoading: false,
  cart: null,
  upSellAppeals: null,
  isAdminCost: false,
  quickDonateAppeal: null,
};

export const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { payload } = action;
      state.user = payload;
    },
    setDashboardInfo: (state, action) => {
      const { payload } = action;
      state.dashboardInfo = payload;
    },
    setLoading: (state, action) => {
      const { payload } = action;
      state.loading = payload;
    },
    setCart: (state, action) => {
      const { payload } = action;
      state.cart = payload;
    },
    setUpsellAppeals: (state, action) => {
      const { payload } = action;
      state.upSellAppeals = payload;
    },
    setAdminCost: (state, action) => {
      const { payload } = action;
      state.isAdminCost = payload;
    },
    setQuickDonationAppeal: (state, action) => {
      const { payload } = action;
      state.quickDonateAppeal = payload;
    },
  },
});

export const {
  addUser,
  setDashboardInfo,
  setLoading,
  setCart,
  setUpsellAppeals,
  setAdminCost,
  setQuickDonationAppeal,
} = userSlice.actions;

export default userSlice.reducer;
