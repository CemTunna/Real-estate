import { useEffect, useState } from 'react';
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
import { Listings } from '@/interfaces/Listing';
import Container from '@/components/Container';
import Loader from '@/components/Loader';
import Text from '@/components/ui/Text/Text';
import useStyles from './OffersStyles';
import OffersList from './OffersList';
import getCollectionSnapshot from '@/helpers/database/getCollectionSnapshot';

const Offers = () => {
  const { classes } = useStyles();
  const [houses, setHouses] = useState<Listings[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [lastFetchedListing, setLastFetchedListing] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const snapshot = await getCollectionSnapshot(
          query(
            collection(db, 'listings'),
            where('offer', '==', true),
            orderBy('timestamp', 'desc'),
            limit(10)
          )
        );
        setLastFetchedListing(
          snapshot.querySnap.docs[snapshot.querySnap.docs.length - 1]
        );

        setHouses(snapshot.collection);
        setLoading(false);
      } catch (error) {
        toast.error("Couldn't get listings");
      }
    })();
  }, []);

  const getMoreListing = async () => {
    try {
      const snapshot = await getCollectionSnapshot(
        query(
          collection(db, 'listings'),
          where('offer', '==', true),
          orderBy('timestamp', 'desc'),
          startAfter(lastFetchedListing),
          limit(10)
        )
      );

      setLastFetchedListing(
        snapshot.querySnap.docs[snapshot.querySnap.docs.length - 1]
      );

      setHouses((prevState: any) => [...prevState, ...snapshot.collection]);
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
      ) : houses && houses.length > 0 ? (
        <>
          <main className={classes.main}>
            <OffersList houses={houses} />
          </main>
          <br />
          <br />
          {lastFetchedListing && (
            <p className={classes.load} onClick={getMoreListing}>
              Load More...
            </p>
          )}
        </>
      ) : (
        <Text className={classes.text}>{`No Offers`}</Text>
      )}
    </Container>
  );
};

export default Offers;
