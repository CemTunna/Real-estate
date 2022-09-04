import React, { Fragment, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Theme } from '@/theme/Theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar/Navbar';
import Layout from '@/components/Layout';
import './App.css';
import PrivateRoute from '@/components/PrivateRoute';
import AppRoutes from '@/routes/Routes';
function App() {
  return (
    <Layout>
      <Router>
        <Navbar />
        <Suspense fallback={'Loading...'}>
          <Routes>
            {AppRoutes.map(({ path, Component, isPrivate }) =>
              isPrivate ? (
                <Fragment key={Component}>
                  <Route path={path} element={<PrivateRoute />}>
                    <Route path={path} element={<Component />} />
                  </Route>
                </Fragment>
              ) : (
                <Fragment key={Component}>
                  <Route path={path} element={<Component />} />
                </Fragment>
              )
            )}
          </Routes>
        </Suspense>
      </Router>
      <ToastContainer autoClose={2000} />
    </Layout>
  );
}

export default Theme(React.memo(App));
