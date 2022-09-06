import React, { useState, useEffect, useRef } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import firebaseAuth from '@/helpers/auth/firebaseAuth';
import Loader from '@/components/Loader';
import { Grid, TextareaAutosize } from '@mui/material';
import Subtitle from '@/components/Subtitle';
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
import Button from '@/components/ui/Button/Button';
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
        <Subtitle>Create a Listing </Subtitle>
      </header>
      <main className={classes.main}>
        <Form onSubmit={onSubmit}>
          <Grid className={classes.subFormContainer}>
            <H3>Sell - Rent</H3>
            <Grid className={classes.btnContainer}>
              <Button
                disabled={type === 'sale' ? true : false}
                id='type'
                value='sale'
                onClick={onMutate}
              >
                Sell
              </Button>
              <Button
                disabled={type === 'rent' ? true : false}
                id='type'
                value='rent'
                onClick={onMutate}
              >
                Rent
              </Button>
            </Grid>
          </Grid>
          {/* <FormContainer>
            <Grid>
              <FormSubContainer>
                <FormLabel className={classes.label} label='name'>
                  Name
                </FormLabel>
                <FormInput
                  className={classes.input}
                  type='text'
                  id='name'
                  value={name}
                  maxLength={32}
                  minLength={10}
                  onChange={onMutate}
                  required={true}
                />
              </FormSubContainer>
              <FormSubContainer icon={<BedIcon className={classes.icon} />}>
                <FormLabel label='bedrooms'>Bedrooms</FormLabel>
                <FormInput
                  className={classes.input}
                  type='number'
                  id='bedrooms'
                  value={bedrooms}
                  onChange={onMutate}
                  min={1}
                  max={50}
                  required
                />
              </FormSubContainer>
              <FormSubContainer
                icon={<BathroomIcon className={classes.icon} />}
              >
                <FormLabel label='bathrooms'>Bathrooms</FormLabel>
                <FormInput
                  className={classes.input}
                  type='number'
                  id='bathrooms'
                  value={bathrooms}
                  onChange={onMutate}
                  min={1}
                  max={50}
                  required
                />
              </FormSubContainer>

              <FormSubContainer>
                <FormLabel>Parking spot</FormLabel>
                <Grid className={classes.btnContainer}>
                  <FormButton
                    isActive={parking ? true : false}
                    id='parking'
                    value={true}
                    onClick={onMutate}
                  >
                    Yes
                  </FormButton>
                  <FormButton
                    isActive={!parking && parking !== null ? true : false}
                    id='parking'
                    onClick={onMutate}
                    value={false}
                  >
                    No
                  </FormButton>
                </Grid>
              </FormSubContainer>

              <FormSubContainer>
                <FormLabel>Furnished</FormLabel>
                <Grid className={classes.btnContainer}>
                  <FormButton
                    isActive={furnished ? true : false}
                    value={true}
                    id='furnished'
                    onClick={onMutate}
                  >
                    Yes
                  </FormButton>
                  <FormButton
                    isActive={!furnished && furnished !== null ? true : false}
                    value={false}
                    id='furnished'
                    onClick={onMutate}
                  >
                    No
                  </FormButton>
                </Grid>
              </FormSubContainer>
            </Grid>
            <Grid>
              <FormSubContainer icon={<HomeIcon className={classes.icon} />}>
                <FormLabel label='location'>Address</FormLabel>

                <TextareaAutosize
                  className={classes.textArea}
                  maxRows={4}
                  id='location'
                  value={location}
                  onChange={onMutate}
                  required
                  style={{ width: '21rem' }}
                />
              </FormSubContainer>

              <FormSubContainer>
                <FormLabel>Offer</FormLabel>
                <Grid className={classes.btnContainer}>
                  <FormButton
                    isActive={offer ? true : false}
                    id='offer'
                    value={true}
                    onClick={onMutate}
                  >
                    Yes
                  </FormButton>
                  <FormButton
                    isActive={!offer && offer !== null ? true : false}
                    id='offer'
                    value={false}
                    onClick={onMutate}
                  >
                    No
                  </FormButton>
                </Grid>
              </FormSubContainer>
              <FormSubContainer
                icon={<AttachMoneyIcon className={classes.icon} />}
              >
                <FormLabel>Regular Price</FormLabel>
                <Grid>
                  <FormInput
                    type='number'
                    id='regularPrice'
                    value={regularPrice}
                    onChange={onMutate}
                    min={50}
                    max={750000000}
                    required
                  />
                  {type === 'rent' && <Text>$ / Month</Text>}
                </Grid>
                {offer && (
                  <>
                    <FormLabel>Discounted Price</FormLabel>
                    <FormInput
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
              </FormSubContainer>
              <Grid>
                <FormSubContainer icon={<ImageIcon className={classes.icon} />}>
                  <FormLabel>Images</FormLabel>
                  <Text>Max 6 images</Text>

                  <FormInput
                    type='file'
                    id='images'
                    onChange={onMutate}
                    max={6}
                    accept='.jpg,.png,.jpeg'
                    multiple={true}
                  />
                </FormSubContainer>
              </Grid>
              <Button className={classes.btn} type='submit'>
                Create Listing
              </Button>
            </Grid>
          </FormContainer> */}
        </Form>
      </main>
    </Container>
  );
};

export default CreateListing;
