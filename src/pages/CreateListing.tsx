import React, { useState, useEffect, useRef } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import firebaseAuth from '@/helpers/firebaseAuth';
import Loader from '@/components/Loader';
const CreateListing = () => {
  const [formData, setFormData] = useState({
    type: 'rent',
    name: '',
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: '',
    offers: false,
    regularPrice: 0,
    discountedPrice: 0,
    images: {},
    latitude: 0,
    longtitude: 0,
    userRef: '',
  });
  const [loading, setLoading] = useState(false);
  const { auth } = firebaseAuth();
  const navigate = useNavigate();
  const mounted = useRef(true);
  useEffect(() => {
    if (mounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData({ ...formData, userRef: user.uid });
        } else {
          navigate('/signIn');
        }
      });
    }
    return () => {
      mounted.current = false;
    };
  }, [mounted]);
  if (loading) {
    return <Loader />;
  }
  return <div>CreateListing</div>;
};

export default CreateListing;
