import { createSlice } from '@reduxjs/toolkit';
import firebaseAuth from '@/helpers/firebaseAuth';
import { toast } from 'react-toastify';
const initialState = {
  isLoggedIn: false,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authRequest: (state, action: any) => {
      state.loading = true;
      state.isLoggedIn = false;
    },
    logOut: (state) => {
      const { auth } = firebaseAuth();
      auth.signOut();
      state.isLoggedIn = false;
      state.loading = false;
    },
    logIn: (state, action: any) => {
      state.isLoggedIn = action.isLoggedIn;
      if (state.isLoggedIn === false) {
        toast.error('Wrong Credentials');
      }
      state.loading = false;
    },
    // getauthRequest: (state, action) => {
    //   state.loading = true;
    // },
    // getauthSuccess: (state, action) => {
    //   state.loading = false;
    //   state.auths = action.auths;
    // },
    // getauthFailed: (state, action) => {
    //   state.loading = false;
    //   state.error = action.message;
    // },
    // setText: (state, action) => {
    //   state.text = action.payload;
    // },
  },
});

export const { logOut, logIn, authRequest } = authSlice.actions;

export default authSlice.reducer;
