import React, { useEffect, useState } from 'react';
import { Grid, ListItem, TextField, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import Subtitle from '@/components/Subtitle';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import DoneIcon from '@mui/icons-material/Done';
import { IconButton } from '@mui/material';
import classNames from 'classnames';
import Container from '@/components/Container';
import BRealButton from '@/components/BRealButton';
import BRealForm from '@/components/BRealForm';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import firebaseAuth from '@/helpers/firebaseAuth';
import useForm from '@/hooks/useForm';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { db } from '@/firebase';
import BReListItem from '@/components/BReListItem';
import { toast } from 'react-toastify';
const useStyles = makeStyles()((theme) => ({
  title: {
    color: theme.palette.secondary.main,
    letterSpacing: '0.5px',
  },
  btn: {
    marginTop: '1rem',
  },
  mainStyle: {
    width: '30rem',
    display: 'flex',
    flexDirection: 'column',
  },
  bodyContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  change: {
    fontWeight: 'bold',
    transition: 'all .2s ease-out',
    color: theme.palette.primary.dark,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.secondary.main,
    },
  },
  footerContiner: {
    marginTop: '1rem',
  },

  input: {
    letterSpacing: '0.5px',
    marginBottom: '1rem',
    fontWeight: 'normal',
    border: '1px solid',
    borderColor: '#8886866f',
    borderRadius: '5px',
    padding: '0.5rem',
    transition: 'all .2s ease-out',
  },
  inputActive: {
    borderColor: theme.palette.secondary.main,
    '&:hover': {
      borderColor: theme.palette.primary.light,
    },
  },
  link: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
    color: theme.palette.secondary.main,
    textTransform: 'capitalize',
    fontWeight: theme.typography.fontWeightBold,
    border: '2px solid transparent',
    transition: 'all .5s ease-out',
    padding: '0.5rem',
    '&:hover': {
      border: '2px solid #333',
      borderRadius: '10px',
      fontSize: '20px',
    },
  },
}));

const Profile = () => {
  const { classes } = useStyles();
  const { currentuser, auth } = firebaseAuth();

  const navigate = useNavigate();
  const [changedDetails, setChangedDetails] = useState(false);
  const logout = () => {
    auth.signOut();
    navigate('/signIn');
  };

  const { name, email, setFormData, onChange, onSubmit } = useForm();
  const [listings, setListings] = useState<any>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      name: currentuser.displayName!,
      email: currentuser.email!,
    }));
    const fetchUserListings = async () => {
      const listingRef = collection(db, 'listings');
      const q = query(
        listingRef,
        where('userRef', '==', currentuser.uid),
        orderBy('timestamp', 'desc')
      );
      const snapShot = await getDocs(q);
      const listing: any = [];
      snapShot.forEach((item) => {
        return listing.push({
          id: item.id,
          data: item.data(),
        });
      });
      setListings(listing);
      setLoading(false);
    };
    fetchUserListings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentuser.uid, currentuser.email, currentuser.displayName]);
  const onDelete = async (id: string) => {
    await deleteDoc(doc(db, 'listings', id));
    const newListArray = listings.filter((item: any) => item.id !== id);
    setListings(newListArray);
    toast.success('Delete was successful');
  };
  const onEdit = (id: string) => {
    navigate(`/edit/${id}`);
  };

  return (
    <Container>
      <header>
        <Subtitle>My Profile</Subtitle>
      </header>
      <main className={classes.mainStyle}>
        <Grid>
          <Grid className={classes.bodyContainer}>
            <Typography variant='h4' className={classes.title}>
              Account Details
            </Typography>
            <IconButton
              className={classes.change}
              onClick={() => {
                changedDetails && onSubmit();
                setChangedDetails((prevState: boolean) => !prevState);
              }}
            >
              {changedDetails ? <DoneIcon /> : <SettingsIcon />}
            </IconButton>
          </Grid>
        </Grid>
        <Grid className={classes.footerContiner}>
          <BRealForm>
            <TextField
              InputProps={{
                disableUnderline: true,
              }}
              variant='standard'
              type='text'
              id='name'
              className={
                !changedDetails
                  ? classes.input
                  : classNames(classes.input, classes.inputActive)
              }
              disabled={!changedDetails}
              value={name}
              onChange={onChange}
            />
            <TextField
              InputProps={{
                disableUnderline: true,
              }}
              variant='standard'
              type='email'
              id='email'
              className={
                !changedDetails
                  ? classes.input
                  : classNames(classes.input, classes.inputActive)
              }
              disabled={!changedDetails}
              value={email}
              onChange={onChange}
            />
          </BRealForm>
        </Grid>
        <Link to='/createListing' className={classes.link}>
          List your home or rent one!
          <ChevronRightIcon style={{ marginLeft: '10px' }} />
        </Link>
        <BRealButton className={classes.btn} onClick={logout}>
          Log out <LogoutIcon style={{ marginLeft: '10px' }} />
        </BRealButton>
        {!loading && listings.length > 0 && (
          <>
            <p>Listings:</p>
            <ul>
              {listings.map((item: any) => (
                <BReListItem
                  onDelete={() => onDelete(item.id)}
                  onEdit={() => onEdit(item.id)}
                  key={item.id}
                  listing={item.data}
                  id={item.id}
                />
              ))}
            </ul>
          </>
        )}
      </main>
    </Container>
  );
};

export default React.memo(Profile);
