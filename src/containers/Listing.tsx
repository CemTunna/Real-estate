import React, { useState, useEffect } from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import firebaseAuth from '@/helpers/auth/firebaseAuth';
import { db } from '@/firebase';
import ShareIcon from '@mui/icons-material/Share';
import Loader from '@/components/Loader';
// import auth from '@/state/reducers/auth';
import { Grid, IconButton, List, ListItem, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import BReText from '@/components/BReText';
import classNames from 'classnames';
import BedIcon from '@mui/icons-material/Bed';
import BathroomIcon from '@mui/icons-material/Bathroom';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ChairIcon from '@mui/icons-material/Chair';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const useStyles = makeStyles()((theme) => ({
  main: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    overflowX: 'hidden',
    border: '4px solid red',
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
    marginLeft: '1rem',
    // [theme.breakpoints.down('sm')]: {
    //   marginLeft: '0rem',

    // },
  },
  for: {
    color: theme.palette.secondary.dark,
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
    margin: '1rem',
    [theme.breakpoints.down('md')]: {
      width: '70%',
      fontSize: '16px',
      alignSelf: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      width: '40%',
      fontSize: '16px',
      alignSelf: 'center',
    },
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
  imgContainer: {
    height: '40vh',
    width: '95vw',
    overflow: 'hidden',
    borderRadius: '4px',
    boxShadow:
      'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
  },
  swiper: {
    marginLeft: '1rem',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  swiperSlider: {
    marginLeft: '1.5rem',
    [theme.breakpoints.down('md')]: {
      marginLeft: '1rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0.5rem',
    },
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    border: '3px solid red',
    [theme.breakpoints.down('md')]: {
      maxWidth: '30rem',
      alignSelf: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '20rem',
      alignSelf: 'center',
    },
  },
  listItem: {
    fontWeight: theme.typography.fontWeightBold,
    flex: 1,
    [theme.breakpoints.down('md')]: {
      border: ' 3px solid red',
    },
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
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
      <Swiper
        className={classes.swiper}
        spaceBetween={50}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {listing.imgUrls.map((url: string, index: number) => (
          <SwiperSlide key={index} className={classes.swiperSlider}>
            <Grid
              className={classes.imgContainer}
              style={{
                background: `url(${listing.imgUrls[index]}) no-repeat center `,
                backgroundSize: 'cover',
              }}
            ></Grid>
          </SwiperSlide>
        ))}
      </Swiper>
      <Grid
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '2rem',
          border: '1px solid  blue',
        }}
      >
        <Grid className={classes.container}>
          <Grid className={classes.textContainer}>
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
          </Grid>
          {listing.offer && (
            <Typography className={classes.price}>
              ${listing.regularPrice - listing.discountedPrice} discount
            </Typography>
          )}
          <List
            className={classes.list}
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
            }}
          >
            <ListItem className={classes.listItem}>
              {listing.bedrooms > 1
                ? `${listing.bedrooms} Bedrooms`
                : '1 Bedroom'}
              <BedIcon className={classes.icon} fontSize='large' />
            </ListItem>

            <ListItem className={classes.listItem}>
              {listing.bathrooms > 1
                ? `${listing.bathrooms} Bathrooms`
                : '1 Bathroom'}{' '}
              <BathroomIcon className={classes.icon} fontSize='large' />
            </ListItem>
            {listing.parking && (
              <ListItem className={classes.listItem}>
                'Parking Spot'
                <DirectionsCarIcon className={classes.icon} fontSize='large' />
              </ListItem>
            )}
            {listing.furnished && (
              <ListItem className={classes.listItem}>
                'Furnished{' '}
                <ChairIcon className={classes.icon} fontSize='large' />
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
        {/* <Grid style={{ width: '10rem' }}>
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
        </Grid> */}
      </Grid>
    </main>
  );
};

export default Listing;
