import React, { Fragment } from 'react';
import { Theme } from '@/theme/Theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Explore from '@/pages/Explore';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import Profile from '@/pages/Profile';
import Offers from '@/pages/Offers';
import ForgotPassword from '@/pages/ForgotPassword';
import Navbar from '@/components/Navbar';
import Layout from '@/components/Layout';
function App() {
  return (
    <Fragment>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Explore />} />
            <Route path='/offers' element={<Offers />} />
            <Route path='/profile' element={<SignIn />} />
            <Route path='/signIn' element={<SignIn />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/forgotPassword' element={<ForgotPassword />} />
          </Routes>
          <Navbar />
        </Layout>
      </Router>
    </Fragment>
  );
}

export default Theme(App);
