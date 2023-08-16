import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  dashboardInfo: {},
  loading: false,
  dataLoading: false,
  cart: null,
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
  },
});

export const { addUser, setDashboardInfo, setLoading, setCart } =
  userSlice.actions;

export default userSlice.reducer;
