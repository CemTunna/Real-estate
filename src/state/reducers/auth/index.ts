import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loginCredentials: {},
  },
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.loginCredentials = action.payload;
    },
  },
});
export const { login } = authSlice.actions;
export default authSlice.reducer;
