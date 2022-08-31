import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Theme } from '@/theme/Theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Explore from '@/containers/Explore';
import SignIn from '@/containers/auth/SignIn';
import SignUp from '@/containers/auth/SignUp';
import Profile from '@/containers/Profile';
import Offers from '@/containers/Offers';
import Category from '@/containers/Category';
import ForgotPassword from '@/containers/auth/ForgotPassword';
import Navbar from '@/components/navbar/Navbar';
import Layout from '@/components/Layout';
import './App.css';
import PrivateRoute from '@/components/PrivateRoute';
import CreateListing from '@/containers/CreateListing';
import Listing from '@/containers/Listing';
import Contact from '@/containers/Contact';
import Edit from '@/containers/Edit';
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
