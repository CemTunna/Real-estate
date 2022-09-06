import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from 'firebase/firestore';
import { db } from '@/firebase';
import { toast } from 'react-toastify';
import Subtitle from '@/components/Subtitle';
import Container from '@/components/Container';
import Loader from '@/components/Loader';
import Text from '@/components/ui/Text/Text';
import useStyles from './CategoryStyles';
import getCollectionSnapshot from '@/helpers/database/getCollectionSnapshot';
import CategoryList from './CategoryList';
import Listings from './interface';

const Category = () => {
  const { classes } = useStyles();
  const [listing, setListing] = useState<Listings[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [lastFetchedListing, setLastFetchedListing] = useState<any>(null);

  const params = useParams();

  useEffect(() => {
    (async () => {
      try {
        const snapshot = await getCollectionSnapshot(
          query(
            collection(db, 'listings'),
            where('type', '==', params.categoryType),
            orderBy('timestamp', 'desc'),
            limit(10)
          )
        );

        setLastFetchedListing(
          snapshot.querySnap.docs[snapshot.querySnap.docs.length - 1]
        );

        setListing(snapshot.collection);
        setLoading(false);
      } catch (error) {
        toast.error("Couldn't get listings");
      }
    })();
  }, [params.categoryType]);

  const getMoreListing = async () => {
    try {
      const snapshot = await getCollectionSnapshot(
        query(
          collection(db, 'listings'),
          where('type', '==', params.categoryType),
          orderBy('timestamp', 'desc'),
          startAfter(lastFetchedListing),
          limit(10)
        )
      );
      setLastFetchedListing(
        snapshot.querySnap.docs[snapshot.querySnap.docs.length - 1]
      );

      setListing((prevState: any) => [...prevState, ...snapshot.collection]);
      setLoading(false);
    } catch (error) {
      toast.error("Couldn't get listings");
    }
  };

  return (
    <Container>
      <header>
        <Subtitle>
          {params.categoryType === 'rent'
            ? 'Places for rent'
            : 'Places for sell'}
        </Subtitle>
      </header>
      {loading ? (
        <Loader />
      ) : listing && listing.length > 0 ? (
        <>
          <main className={classes.main}>
            <CategoryList listings={listing} />
          </main>
          <br />
          <br />
          {lastFetchedListing && <p onClick={getMoreListing}>Load More</p>}
        </>
      ) : (
        <Text
          className={classes.text}
        >{`No listing for ${params.categoryType}`}</Text>
      )}
    </Container>
  );
};

export default Category;
