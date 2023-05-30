import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './auth/userSlice';
import AppealReducer from './appeal/appealSlice';

export const store = configureStore({
  reducer: {
    session: UserReducer,
    appeal: AppealReducer,
  },
});
