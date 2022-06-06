import { createSlice } from '@reduxjs/toolkit';
import firebaseAuth from '@/helpers/firebaseAuth';
import { toast } from 'react-toastify';
const initialState = {
  isLoggedIn: false,
  loading: false,
  error: null,
  isRegistered: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state, action: any) => {
      state.loading = true;
      state.isLoggedIn = false;
    },
    logOut: (state) => {
      const { auth } = firebaseAuth();
      auth.signOut();
      state.isLoggedIn = false;
      state.loading = false;
      state.isRegistered = false;
    },
    logIn: (state, action: any) => {
      state.isLoggedIn = action.isLoggedIn;
      if (state.isLoggedIn === false) {
        toast.error('Wrong Credentials');
      }
      state.loading = false;
    },
    registerRequest: (state, action: any) => {
      state.loading = true;
      state.isRegistered = false;
    },
    register: (state, action: any) => {
      state.isRegistered = action.isRegistered;
      if (state.isRegistered === false) {
        toast.error('Wrong Credentials');
      }
      state.loading = false;
    },
  },
});

export const { logOut, logIn, loginRequest, registerRequest, register } =
  authSlice.actions;

export default authSlice.reducer;
