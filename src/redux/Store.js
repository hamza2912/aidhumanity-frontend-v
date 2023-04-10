import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './auth/userSlice';

export const store = configureStore({
  reducer: {
    session: UserReducer,
  },
});
