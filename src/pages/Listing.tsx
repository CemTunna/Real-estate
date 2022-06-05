import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import firebaseAuth from '@/helpers/firebaseAuth';
import { db } from '@/firebase';
import ShareIcon from '@mui/icons-material/Share';
import Loader from '@/components/Loader';
import auth from '@/state/reducers/auth';
import { Grid, IconButton, List, ListItem, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import BReText from '@/components/BReText';
import classNames from 'classnames';
import BedIcon from '@mui/icons-material/Bed';
import BathroomIcon from '@mui/icons-material/Bathroom';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ChairIcon from '@mui/icons-material/Chair';
const useStyles = makeStyles()((theme) => ({
  main: {
    display: 'flex',
    padding: '2rem',
    justifyContent: 'center',
  },
  link: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.secondary.dark,
    letterSpacing: '0.5px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '50rem',
  },
  text: {
    fontWeight: theme.typography.fontWeightBold,
  },
  for: {
    textAlign: 'center',
    margin: '1rem',
  },
  price: {
    border: '3px solid #e74c0e',
    backgroundColor: '#e74c0e',
    borderRadius: '100px',
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing: '0.5px',
    color: theme.palette.primary.light,
    textTransform: 'capitalize',
    fontSize: '20px',
    textAlign: 'center',
  },

  listItem: {
    fontWeight: theme.typography.fontWeightBold,
  },
  icon: {
    marginLeft: '10px',
  },
  linkBtn: {
    textDecoration: 'none',
    padding: '0.2rem',
    textAlign: 'center',
    color: theme.palette.secondary.dark,
    letterSpacing: '0.5px',
    fontWeight: theme.typography.fontWeightBold,
    transition: 'all .2s ease-out',
    border: '3px solid transparent',
    margin: '0.5rem',
    borderRadius: '4px',
    '&:hover': {
      border: '3px solid #e74c0e',
      backgroundColor: '#e74c0e',
      color: theme.palette.primary.light,
    },
  },
}));

const Listing = () => {
  const { classes } = useStyles();

  const [listing, setListing] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [shareLinkCopied, setShareLinkCopied] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      const collection = 'listings';
      const docRef = doc(db, collection!, params.Id!.toString());
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setListing(docSnap.data());
        setLoading(false);
      }
    };
    fetchListing();
  }, [navigate, params.Id]);
  if (loading) {
    return <Loader />;
  }

  return (
    <main className={classes.main}>
      {/* slider */}

      <Grid className={classes.container}>
        <BReText className={classes.text}>
          {listing.name} -{' $'}
          {listing.offer
            ? listing.discountedPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            : listing.regularPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </BReText>
        <BReText className={classes.text}>{listing.location}</BReText>
        <BReText className={classNames(classes.for, classes.text)}>
          For {listing.type === 'rent' ? 'Rent' : 'Sale'}
        </BReText>
        {listing.offer && (
          <Typography className={classes.price}>
            ${listing.regularPrice - listing.discountedPrice} discount
          </Typography>
        )}
        <List>
          <ListItem className={classes.listItem}>
            {listing.bedrooms > 1
              ? `${listing.bedrooms} Bedrooms`
              : '1 Bedroom'}{' '}
            <BedIcon className={classes.icon} fontSize='large' />
          </ListItem>
          <ListItem className={classes.listItem}>
            {listing.bathrooms > 1
              ? `${listing.bathrooms} Bathrooms`
              : '1 Bathroom'}{' '}
            <BathroomIcon className={classes.icon} fontSize='large' />
          </ListItem>
          <ListItem className={classes.listItem}>
            {listing.parking && 'Parking Spot'}{' '}
            <DirectionsCarIcon className={classes.icon} fontSize='large' />
          </ListItem>
          {listing.furnished && (
            <ListItem className={classes.listItem}>
              'Furnished <ChairIcon className={classes.icon} fontSize='large' />
            </ListItem>
          )}
        </List>
        {firebaseAuth().currentuser?.uid !== listing.userRef && (
          <Link
            to={`/contact/${listing.userRef}?listingName=${listing.name}`}
            className={classes.linkBtn}
          >
            Contact LandLord
          </Link>
        )}
      </Grid>
      <Grid style={{ width: '10rem' }}>
        <IconButton
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            setShareLinkCopied(true);
            setTimeout(() => {
              setShareLinkCopied(false);
            }, 2000);
          }}
        >
          <ShareIcon />
        </IconButton>
        {shareLinkCopied && (
          <Typography className={classes.link}>Link Copied</Typography>
        )}
      </Grid>
    </main>
  );
};

export default Listing;
