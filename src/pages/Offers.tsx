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
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
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
  load: {
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing: '0.5px',
    color: theme.palette.primary.dark,
    cursor: 'pointer',
    transition: 'all .5s ease-out',
    '&:hover': {
      opacity: 0.6,
    },
  },
}));

const Offers = () => {
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
          where('offer', '==', true),
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
  }, []);

  const moreGetList = async () => {
    try {
      const listRef = collection(db, 'listings');
      const q = query(
        listRef,
        where('offer', '==', true),
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
        <Subtitle>Offers</Subtitle>
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
          {lastFetchedListing && (
            <p className={classes.load} onClick={moreGetList}>
              Load More...
            </p>
          )}
        </>
      ) : (
        <BReText className={classes.text}>{`No listing`}</BReText>
      )}
    </Container>
  );
};

export default Offers;
