import React, { useState, useEffect, useRef } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import firebaseAuth from '@/helpers/auth/firebaseAuth';
import Loader from '@/components/Loader';
import { Grid, TextareaAutosize } from '@mui/material';
import Container from '@/components/Container';
import BedIcon from '@mui/icons-material/Bed';
import BathroomIcon from '@mui/icons-material/Bathroom';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ChairIcon from '@mui/icons-material/Chair';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ImageIcon from '@mui/icons-material/Image';
import classNames from 'classnames';
import { storeImages } from '@/helpers/storeImages';
import { toast } from 'react-toastify';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';
import Form from '@/components/form/Form';
import useStyles from './CreateListingStyles';
import H3 from '@/components/ui/H3/H3';
import H4 from '@/components/ui/H4/H4';
import Button from '@/components/ui/Button/Button';
import FormLabel from '@/components/form/FormLabel';
import Input from '@/components/ui/Input/Input';
import Text from '@/components/ui/Text/Text';
const CreateListing = () => {
  const { classes } = useStyles();

  const [formData, setFormData] = useState({
    type: 'rent',
    name: '',
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    location: '',
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
    images: {},
    userRef: '',
  });
  console.log('formData: ', formData);

  const [loading, setLoading] = useState(false);
  const { auth } = firebaseAuth();
  const navigate = useNavigate();
  const isMounted = useRef(true);
  const {
    location,
    bathrooms,
    bedrooms,
    discountedPrice,
    furnished,
    images,
    name,
    offer,
    parking,
    regularPrice,
    type,
    userRef,
  } = formData;
  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData({ ...formData, userRef: user.uid });
        } else {
          navigate('/login');
        }
      });
    }
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);
  if (loading) {
    return <Loader />;
  }
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (discountedPrice >= regularPrice) {
      setLoading(false);
      toast.error('Discounted price must be less than regular price');
      return;
    }

    if (Object.keys(images).length > 6) {
      setLoading(false);
      toast.error('Max 6 images can be uploaded');
      return;
    }

    const imgUrls = await Promise.all(
      Object.entries(images).map((image: any) => storeImages(image[1]))
    ).catch((error) => {
      setLoading(false);
      toast.error('images cant being uploaded');
      return;
    });
    // will be changed
    const formDataCopy: any = {
      ...formData,
      imgUrls,
      timestamp: serverTimestamp(),
    };
    delete formDataCopy.images;
    !formDataCopy.offer && delete formDataCopy.discountedPrice;
    const docRef = await addDoc(collection(db, 'listings'), formDataCopy);
    setLoading(false);
    toast.success('Listing saved');
    navigate(`/category/${formDataCopy.type}/${docRef.id}`);
  };
  const onMutate = (e: any) => {
    let boolean: boolean | null = null;

    if (e.target.value === 'true') {
      boolean = true;
    }
    if (e.target.value === 'false') {
      boolean = false;
    }
    // for files
    if (e.target.files) {
      setFormData((prevState) => ({ ...prevState, images: e.target.files }));
    }

    // for text/booleans/numbers
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }));
    }
  };
  return (
    <Container>
      <header>
        <H3>Create a Listing </H3>
      </header>
      <main className={classes.main}>
        <Form onSubmit={onSubmit}>
          <Grid className={classes.subFormContainer}>
            <H4 className={classes.subTitle}>Sell - Rent</H4>
            <Grid className={classes.btnContainer}>
              <Button
                id='type'
                value='sale'
                onClick={onMutate}
                className={type === 'sale' ? classes.activeBtn : classes.btn}
              >
                Sell
              </Button>
              <Button
                id='type'
                value='rent'
                onClick={onMutate}
                className={type === 'rent' ? classes.activeBtn : classes.btn}
              >
                Rent
              </Button>
            </Grid>
          </Grid>
          <Grid className={classes.bodyContainer}>
            <Grid className={classes.subBodyContainer}>
              <FormLabel className={classes.label} label='name'>
                Name
              </FormLabel>
              <Input
                className={classes.input}
                type='text'
                id='name'
                value={name}
                maxLength={32}
                minLength={10}
                onChange={onMutate}
                required={true}
              />
              <FormLabel className={classes.label} label='bedrooms'>
                Bedrooms
              </FormLabel>
              <Input
                className={classes.input}
                type='number'
                id='bedrooms'
                value={bedrooms}
                onChange={onMutate}
                min={1}
                max={50}
                required
              />
              <FormLabel className={classes.label} label='bathrooms'>
                Bathrooms
              </FormLabel>
              <Input
                className={classes.input}
                type='number'
                id='bathrooms'
                value={bathrooms}
                onChange={onMutate}
                min={1}
                max={50}
                required
              />
              <FormLabel className={classes.label} label='parking'>
                Parking spot
              </FormLabel>
              <Grid style={{ display: 'flex' }}>
                <Button
                  id='parking'
                  value={true}
                  onClick={onMutate}
                  className={parking ? classes.activeBtn : classes.btn}
                >
                  Yes
                </Button>
                <Button
                  id='parking'
                  onClick={onMutate}
                  value={false}
                  className={!parking ? classes.activeBtn : classes.btn}
                >
                  No
                </Button>
              </Grid>

              <FormLabel className={classes.label} label='furnished'>
                Furnished
              </FormLabel>
              <Grid style={{ display: 'flex' }}>
                <Button
                  className={furnished ? classes.activeBtn : classes.btn}
                  value={true}
                  id='furnished'
                  onClick={onMutate}
                >
                  Yes
                </Button>
                <Button
                  className={!furnished ? classes.activeBtn : classes.btn}
                  value={false}
                  id='furnished'
                  onClick={onMutate}
                >
                  No
                </Button>
              </Grid>
            </Grid>

            <Grid className={classes.subBodyContainer}>
              <FormLabel className={classes.label} label='location'>
                Address
              </FormLabel>
              <TextareaAutosize
                className={classes.textArea}
                maxRows={4}
                id='location'
                value={location}
                onChange={onMutate}
                required
                style={{ width: '21rem' }}
              />

              <FormLabel className={classes.label} label='offer'>
                Offer
              </FormLabel>
              <Grid style={{ display: 'flex' }}>
                <Button
                  id='offer'
                  value={true}
                  onClick={onMutate}
                  className={offer ? classes.activeBtn : classes.btn}
                >
                  Yes
                </Button>
                <Button
                  id='offer'
                  value={false}
                  onClick={onMutate}
                  className={!offer ? classes.activeBtn : classes.btn}
                >
                  No
                </Button>
              </Grid>

              <FormLabel className={classes.label} label='regularPrice'>
                Regular Price
              </FormLabel>
              {type === 'rent' && <Text>$ / Month</Text>}
              <Input
                type='number'
                id='regularPrice'
                value={regularPrice}
                onChange={onMutate}
                min={50}
                max={750000000}
                required
              />

              {offer && (
                <>
                  <FormLabel className={classes.label} label='discountedPrice'>
                    Discounted Price
                  </FormLabel>
                  <Input
                    type='number'
                    id='discountedPrice'
                    value={discountedPrice}
                    onChange={onMutate}
                    min={50}
                    max={750000000}
                    required={offer}
                  />
                </>
              )}
              <Grid
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <FormLabel className={classes.label} label='images'>
                  Images
                </FormLabel>
                <Text>Max 6 images</Text>
                <Input
                  type='file'
                  id='images'
                  onChange={onMutate}
                  max={6}
                  accept='.jpg,.png,.jpeg'
                  multiple={true}
                />
              </Grid>
              <Button className={classes.approveBtn} type='submit'>
                Create Listing
              </Button>
            </Grid>
          </Grid>
        </Form>
      </main>
    </Container>
  );
};

export default CreateListing;
