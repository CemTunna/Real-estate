import React, { useEffect, useState, useCallback } from 'react';
import { Grid, List, ListItem } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import DoneIcon from '@mui/icons-material/Done';
import { IconButton } from '@mui/material';
import classNames from 'classnames';
import Container from '@/components/Container';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
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
import useStyles from './ProfileStyles';
import Form from '@/components/formm/Form';
import Button from '@/components/ui/Button/Button';
import H3 from '@/components/ui/H3/H3';
import H4 from '@/components/ui/H4/H4';
import Input from '@/components/ui/Input/Input';
import Text from '@/components/ui/Text/Text';
import editListing from './profileHelpers/edit';
import deleteListing from './profileHelpers/delete';

const Profile = () => {
  const [changedDetails, setChangedDetails] = useState(false);
  const [listings, setListings] = useState<[]>();
  const [loading, setLoading] = useState(true);

  const { classes } = useStyles();
  const { currentuser, auth } = firebaseAuth();
  const navigate = useNavigate();
  const { name, email, setFormData, onChange, updateSubmit } = useForm();

  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      name: currentuser.displayName!,
      email: currentuser.email!,
    }));

    (async () => {
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
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentuser.uid, currentuser.email, currentuser.displayName]);

  const handleEdit = useCallback(
    (id: string, navigate: (route: string) => void) => {
      editListing(id, navigate);
    },
    []
  );
  const handleDelete = useCallback(
    (id: string, listings: [], setListings: Function) => {
      deleteListing(id, listings, setListings);
    },
    [listings]
  );
  const handleLogout = useCallback(() => {
    auth.signOut();
    navigate('/login');
  }, []);

  return (
    <Container>
      <header>
        <H3>My Profile</H3>
      </header>
      <main className={classes.mainStyle}>
        <Grid className={classes.bodyContainer}>
          <H4>Account Details</H4>
          <IconButton
            className={classes.change}
            onClick={() => {
              changedDetails && updateSubmit();
              setChangedDetails((prevState: boolean) => !prevState);
            }}
          >
            {changedDetails ? <DoneIcon /> : <SettingsIcon />}
          </IconButton>
        </Grid>

        <Grid className={classes.footerContiner}>
          <Form>
            <Input
              type='text'
              id='name'
              className={
                !changedDetails
                  ? classes.input
                  : classNames(classes.input, classes.inputActive)
              }
              disabled={!changedDetails}
              value={name!}
              onChange={onChange}
            />
            <Input
              type='email'
              id='email'
              className={
                !changedDetails
                  ? classes.input
                  : classNames(classes.input, classes.inputActive)
              }
              disabled={!changedDetails}
              value={email!}
              onChange={onChange}
            />
          </Form>
        </Grid>
        <Link to='/createListing' className={classes.link}>
          List your home or rent one!
          <ChevronRightIcon style={{ marginLeft: '10px' }} />
        </Link>
        <Button className={classes.btn} onClick={handleLogout}>
          Log out <LogoutIcon style={{ marginLeft: '10px' }} />
        </Button>
        {!loading && listings!.length > 0 && (
          <>
            <Text className={classes.text}>Listings:</Text>
            <List className={classes.list}>
              {listings!.map((item: any) => (
                <BReListItem
                  onDelete={() =>
                    handleDelete(item.id, listings!, setListings!)
                  }
                  onEdit={() => handleEdit(item.id, navigate)}
                  key={item.id}
                  listing={item.data}
                  id={item.id}
                />
              ))}
            </List>
          </>
        )}
      </main>
    </Container>
  );
};

export default Profile;
