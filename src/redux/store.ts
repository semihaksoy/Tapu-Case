import { configureStore } from '@reduxjs/toolkit';
import userAccountReducer from '../features/user/userAccountSlice';

const store = configureStore({
  reducer: {
    userAccount: userAccountReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;