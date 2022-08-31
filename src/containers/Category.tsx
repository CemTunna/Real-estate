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
  getDoc,
} from 'firebase/firestore';
import { db } from '@/firebase';
import { toast } from 'react-toastify';
import Subtitle from '@/components/Subtitle';
import { List } from '@mui/material';
import ReListItem from '@/components/BReListItem';
import { Listing } from '@/interfaces/Listing';
import { makeStyles } from 'tss-react/mui';
import Container from '@/components/Container';
import Loader from '@/components/Loader';
import BReText from '@/components/BReText';
interface ListingArray {
  data: Listing;
  id: string;
}

const useStyles = makeStyles()((theme) => ({
  list: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  main: {
    width: '100%',
    height: '100%',
    alignSelf: 'flex-start',
  },
  text: {
    fontWeight: theme.typography.fontWeightBold,
    margin: '2rem',
  },
}));

const Category = () => {
  const { classes } = useStyles();

  const params = useParams();
  const [listing, setListing] = useState<ListingArray[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [lastFetchedListing, setLastFetchedListing] = useState<any>(null);
  useEffect(() => {
    const getList = async () => {
      try {
        const listRef = collection(db, 'listings');
        const q = query(
          listRef,
          where('type', '==', params.categoryType),
          orderBy('timestamp', 'desc'),
          limit(10)
        );
        const querySnap = await getDocs(q);
        const lastVisible = querySnap.docs[querySnap.docs.length - 1];
        setLastFetchedListing(lastVisible);
        let listings: any = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setListing(listings);
        setLoading(false);
      } catch (error) {
        toast.error("Couldn't get listings");
      }
    };
    getList();
  }, [params.categoryType]);
  console.log(listing);
  const moreGetList = async () => {
    try {
      const listRef = collection(db, 'listings');
      const q = query(
        listRef,
        where('type', '==', params.categoryType),
        orderBy('timestamp', 'desc'),
        startAfter(lastFetchedListing),
        limit(10)
      );
      const querySnap = await getDocs(q);
      const lastVisible = querySnap.docs[querySnap.docs.length - 1];
      setLastFetchedListing(lastVisible);
      let listings: any = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      setListing((prevState: any) => [...prevState, ...listings]);
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
            <List className={classes.list}>
              {listing.map((item) => (
                <ReListItem listing={item.data} id={item.id} key={item.id} />
              ))}
            </List>
          </main>
          <br />
          <br />
          {lastFetchedListing && <p onClick={moreGetList}>Load More</p>}
        </>
      ) : (
        <BReText
          className={classes.text}
        >{`No listing for ${params.categoryType}`}</BReText>
      )}
    </Container>
  );
};

export default Category;
