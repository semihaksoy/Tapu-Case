import { configureStore } from '@reduxjs/toolkit';
import userAccountReducer from '../features/user/userAccountSlice';
import basketReducer from '../features/user/userBasketSlice';

const store = configureStore({
  reducer: {
    userAccount: userAccountReducer,
    basket: basketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;