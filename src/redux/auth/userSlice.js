import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  dashboardInfo: {},
  loading: false,
  dataLoading: false,
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
  },
});

export const { addUser, setDashboardInfo, setLoading } = userSlice.actions;

export default userSlice.reducer;
