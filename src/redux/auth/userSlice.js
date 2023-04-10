import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
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
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
