import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './auth/userSlice';
import AppealReducer from './appeal/appealSlice';
import CommonReducer from './common/CommonSlice';
import HomeReducer from './home/HomeSlice';

export const store = configureStore({
  reducer: {
    session: UserReducer,
    appeal: AppealReducer,
    common: CommonReducer,
    main: HomeReducer,
  },
});
