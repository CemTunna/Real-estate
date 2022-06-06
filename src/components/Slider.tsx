import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '@/firebase';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Loader from './Loader';
const Slider = () => {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState(null);
  const navigate = useNavigate();
  const listingRef = collection(db, 'listings');
  const q = query(listingRef, orderBy('timestamp', 'desc'), limit(5));
  //   const querySnap = await getDocs(q);
  return <div>Slider</div>;
};

export default Slider;
