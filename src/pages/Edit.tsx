import React, { useState, useEffect, useRef } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import firebaseAuth from '@/helpers/firebaseAuth';
import Loader from '@/components/Loader';
import { Grid, TextareaAutosize } from '@mui/material';
import Subtitle from '@/components/Subtitle';
import BRealButton from '@/components/BRealButton';
import BReFormLabel from '@/components/form/BReFormLabel';
import BRealInput from '@/components/BRealInput';
import { makeStyles } from 'tss-react/mui';
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
import BRealFormButton from '@/components/form/BRealFormButton';
import classNames from 'classnames';
import BRealFormContainer from '@/components/form/BRealFormContainer';
import BRealFormInput from '@/components/form/BRealFormInput';
import BRealFormSubContainer from '@/components/form/BRealFormSubContainer';
import BReText from '@/components/BReText';
import { storeImages } from '@/helpers/storeImages';
import { toast } from 'react-toastify';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';
import { Listing } from '@/interfaces/Listing';
const useStyles = makeStyles()((theme) => ({
  main: {
    width: '100%',
  },
  label: {
    marginTop: '1rem',
    marginBottom: 0,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: '1rem',
  },
  textArea: {
    border: '1px solid #e74c0e',
    outline: 'none',
    padding: '0.375rem 0.5rem',
  },
  btn: {
    width: '100%',
  },
}));

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
  const mounted = useRef(true);
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
    if (mounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData({ ...formData, userRef: user.uid });
        } else {
          navigate('/signIn');
        }
      });
    }
    return () => {
      mounted.current = false;
    };
  }, [mounted]);
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

    const formDataCopy: Listing = {
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
        <form onSubmit={onSubmit} className={classes.form}>
          <Grid style={{ margin: '1rem auto' }}>
            <BReFormLabel>Sell - Rent</BReFormLabel>
            <Grid>
              <BRealFormButton
                isActive={type === 'sale' ? true : false}
                id='type'
                value='sale'
                onClick={onMutate}
              >
                Sell
              </BRealFormButton>
              <BRealFormButton
                isActive={type === 'rent' ? true : false}
                id='type'
                value='rent'
                onClick={onMutate}
              >
                Rent
              </BRealFormButton>
            </Grid>
          </Grid>
          <BRealFormContainer>
            <Grid>
              <BRealFormSubContainer>
                <BReFormLabel className={classes.label} label='name'>
                  Name
                </BReFormLabel>
                <BRealFormInput
                  className={classes.input}
                  type='text'
                  id='name'
                  value={name}
                  maxLength={32}
                  minLength={10}
                  onChange={onMutate}
                  required={true}
                />
              </BRealFormSubContainer>
              <BRealFormSubContainer icon={<BedIcon fontSize='large' />}>
                <BReFormLabel label='bedrooms'>Bedrooms</BReFormLabel>

                <BRealFormInput
                  className={classes.input}
                  type='number'
                  id='bedrooms'
                  value={bedrooms}
                  onChange={onMutate}
                  min={1}
                  max={50}
                  required
                />
              </BRealFormSubContainer>
              <BRealFormSubContainer icon={<BathroomIcon fontSize='large' />}>
                <BReFormLabel label='bathrooms'>Bathrooms</BReFormLabel>
                <BRealFormInput
                  className={classes.input}
                  type='number'
                  id='bathrooms'
                  value={bathrooms}
                  onChange={onMutate}
                  min={1}
                  max={50}
                  required
                />
              </BRealFormSubContainer>

              <BRealFormSubContainer
                icon={<DirectionsCarIcon fontSize='large' />}
              >
                <BReFormLabel>Parking spot</BReFormLabel>
                <Grid>
                  <BRealFormButton
                    isActive={parking ? true : false}
                    id='parking'
                    value={true}
                    onClick={onMutate}
                  >
                    Yes
                  </BRealFormButton>
                  <BRealFormButton
                    isActive={!parking && parking !== null ? true : false}
                    id='parking'
                    onClick={onMutate}
                    value={false}
                  >
                    No
                  </BRealFormButton>
                </Grid>
              </BRealFormSubContainer>

              <BRealFormSubContainer icon={<ChairIcon fontSize='large' />}>
                <BReFormLabel>Furnished</BReFormLabel>
                <Grid>
                  <BRealFormButton
                    isActive={furnished ? true : false}
                    value={true}
                    id='furnished'
                    onClick={onMutate}
                  >
                    Yes
                  </BRealFormButton>
                  <BRealFormButton
                    isActive={!furnished && furnished !== null ? true : false}
                    value={false}
                    id='furnished'
                    onClick={onMutate}
                  >
                    No
                  </BRealFormButton>
                </Grid>
              </BRealFormSubContainer>
            </Grid>
            <Grid>
              <BRealFormSubContainer icon={<HomeIcon fontSize='large' />}>
                <BReFormLabel label='location'>Address</BReFormLabel>

                <TextareaAutosize
                  className={classes.textArea}
                  maxRows={4}
                  id='location'
                  value={location}
                  onChange={onMutate}
                  required
                  style={{ width: '21rem' }}
                />
              </BRealFormSubContainer>

              <BRealFormSubContainer icon={<LocalOfferIcon fontSize='large' />}>
                <BReFormLabel>Offer</BReFormLabel>
                <Grid>
                  <BRealFormButton
                    isActive={offer ? true : false}
                    id='offer'
                    value={true}
                    onClick={onMutate}
                  >
                    Yes
                  </BRealFormButton>
                  <BRealFormButton
                    isActive={!offer && offer !== null ? true : false}
                    id='offer'
                    value={false}
                    onClick={onMutate}
                  >
                    No
                  </BRealFormButton>
                </Grid>
              </BRealFormSubContainer>
              <BRealFormSubContainer
                icon={<AttachMoneyIcon fontSize='large' />}
              >
                <BReFormLabel>Regular Price</BReFormLabel>
                <Grid>
                  <BRealFormInput
                    type='number'
                    id='regularPrice'
                    value={regularPrice}
                    onChange={onMutate}
                    min={50}
                    max={750000000}
                    required
                  />
                  {type === 'rent' && <BReText>$ / Month</BReText>}
                </Grid>
                {offer && (
                  <>
                    <BReFormLabel>Discounted Price</BReFormLabel>
                    <BRealFormInput
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
              </BRealFormSubContainer>
              <Grid>
                <BRealFormSubContainer icon={<ImageIcon fontSize='large' />}>
                  <BReFormLabel>Images</BReFormLabel>
                  <BReText>Max 6 images</BReText>

                  <BRealFormInput
                    type='file'
                    id='images'
                    onChange={onMutate}
                    max={6}
                    accept='.jpg,.png,.jpeg'
                    multiple={true}
                  />
                </BRealFormSubContainer>
              </Grid>
              <BRealButton className={classes.btn} type='submit'>
                Create Listing
              </BRealButton>
            </Grid>
          </BRealFormContainer>
        </form>
      </main>
    </Container>
  );
};

export default CreateListing;
