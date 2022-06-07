import { createSlice } from '@reduxjs/toolkit';
import firebaseAuth from '@/helpers/firebaseAuth';
import { toast } from 'react-toastify';
const initialState = {
  isLoggedIn: false,
  loading: false,
  error: null,
  isRegistered: false,
  isUpdate: false,
  isForgotPassword: false,
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
    updateRequest: (state, action: any) => {
      state.loading = true;
      state.isUpdate = false;
    },
    update: (state, action: any) => {
      state.isUpdate = action.isUpdated;
      if (state.isUpdate === false) {
        toast.error('Wrong Credentials');
      }
      state.loading = false;
    },
    forgotPasswordRequest: (state, action: any) => {
      state.loading = true;
      state.isForgotPassword = false;
    },
    forgotPassword: (state, action: any) => {
      state.isForgotPassword = action.isForgotPassword;
      if (state.isForgotPassword === false) {
        toast.error('Wrong Credentials');
      }
      toast.success('Password change link was sent');

      state.loading = false;
    },
  },
});

export const {
  forgotPasswordRequest,
  forgotPassword,
  updateRequest,
  update,
  logOut,
  logIn,
  loginRequest,
  registerRequest,
  register,
} = authSlice.actions;

export default authSlice.reducer;
