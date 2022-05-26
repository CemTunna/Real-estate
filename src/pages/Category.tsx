import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from 'firebase/firestore';
import { db } from '@/firebase';
import { toast } from 'react-toastify';

const Category = () => {
  const params = useParams();
  useEffect(() => {
    const getList = async () => {
      try {
        const listRef = collection(db, 'listings');
        const q = query(listRef, where('type', '==', params.categoryType));
      } catch (error) {}
    };
    getList();
  });
  return <div>Category</div>;
};

export default Category;
