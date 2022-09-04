import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from '@/components/PrivateRoute';
const Explore = React.lazy(() => import('@/containers/Explore'));
const Offers = React.lazy(() => import('@/containers/Offers'));
const Category = React.lazy(() => import('@/containers/Category'));
const Login = React.lazy(() => import('@/containers/Login/Login'));
const Register = React.lazy(() => import('@/containers/Register/Register'));
const ForgotPassword = React.lazy(
  () => import('@/containers/ForgotPassword/ForgotPassword')
);
const Listing = React.lazy(() => import('@/containers/Listing'));
const Edit = React.lazy(() => import('@/containers/Edit'));
const Contact = React.lazy(() => import('@/containers/Contact'));
const Profile = React.lazy(() => import('@/containers/Profile/Profile'));
const CreateListing = React.lazy(() => import('@/containers/CreateListing'));
interface AppRoutesTypes {
  path: string;
  Component: any;
  isPrivate: boolean;
}
const AppRoutes: AppRoutesTypes[] = [
  {
    path: '/',
    Component: Explore,
    isPrivate: false,
  },
  {
    path: '/offers',
    Component: Offers,
    isPrivate: false,
  },
  {
    path: '/category/:categoryType',
    Component: Category,
    isPrivate: false,
  },
  {
    path: '/login',
    Component: Login,
    isPrivate: false,
  },
  {
    path: '/register',
    Component: Register,
    isPrivate: false,
  },
  {
    path: '/forgotPassword',
    Component: ForgotPassword,
    isPrivate: false,
  },
  {
    path: '/category/:categoryType/:Id',
    Component: Listing,
    isPrivate: false,
  },
  {
    path: '/contact/:landlordId',
    Component: Contact,
    isPrivate: false,
  },
  {
    path: '/edit/:Id',
    Component: Edit,
    isPrivate: false,
  },
  {
    path: '/profile',
    Component: Profile,
    isPrivate: true,
  },
  {
    path: '/createListing',
    Component: CreateListing,
    isPrivate: true,
  },
];
export default AppRoutes;
