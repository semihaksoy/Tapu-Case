// userAccountSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserAccountState {
  email: string;
  password: string;
  locale: string;
}

const initialState: UserAccountState = {
  email: '',
  password: '',
  locale: '',
};

const userAccountSlice = createSlice({
  name: 'userAccount',
  initialState,
  reducers: {
    setUserAccount(state, action: PayloadAction<UserAccountState>) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.locale = action.payload.locale;
    },
    logout(state) {
      state.email = '';
      state.password = '';
      state.locale = '';
    },
    setLocale(state, action: PayloadAction<string>) {
      state.locale = action.payload;
    },
  },
});

export const { setUserAccount, logout, setLocale } = userAccountSlice.actions;

export default userAccountSlice.reducer;
