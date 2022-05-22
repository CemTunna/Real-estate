import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Theme } from '@/theme/Theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Explore from '@/pages/Explore';
import SignIn from '@/pages/auth/SignIn';
import SignUp from '@/pages/auth/SignUp';
import Profile from '@/pages/Profile';
import Offers from '@/pages/Offers';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import Navbar from '@/components/Navbar';
import Layout from '@/components/Layout';
import './App.css';
function App() {
  return (
    <Fragment>
      <Router>
        <Layout>
          <Navbar />
          <Routes>
            <Route path='/' element={<Explore />} />
            <Route path='/offers' element={<Offers />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/signIn' element={<SignIn />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/forgotPassword' element={<ForgotPassword />} />
          </Routes>
        </Layout>
      </Router>
      <ToastContainer autoClose={2000} />
    </Fragment>
  );
}

export default Theme(App);
