import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  dashboardInfo: {},
  loading: false,
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
  },
});

export const { addUser, setDashboardInfo } = userSlice.actions;

export default userSlice.reducer;
