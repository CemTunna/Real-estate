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
import Category from '@/pages/Category';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import Navbar from '@/components/Navbar';
import Layout from '@/components/Layout';
import './App.css';
import PrivateRoute from '@/components/PrivateRoute';
import CreateListing from '@/pages/CreateListing';
import Listing from '@/pages/Listing';
import Contact from '@/pages/Contact';
import Edit from '@/pages/Edit';
function App() {
  return (
    <Layout>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/category/:categoryType' element={<Category />} />
          <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/forgotPassword' element={<ForgotPassword />} />
          <Route path='/createListing' element={<PrivateRoute />}>
            <Route path='/createListing' element={<CreateListing />} />
          </Route>
          <Route path='/category/:categoryType/:Id' element={<Listing />} />
          <Route path='/contact/:landlordId' element={<Contact />} />
          <Route path='/edit/:Id' element={<Edit />} />
        </Routes>
      </Router>
      <ToastContainer autoClose={2000} />
    </Layout>
  );
}

export default Theme(React.memo(App));
