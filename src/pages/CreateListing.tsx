import React, { useState, useEffect, useRef } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import firebaseAuth from '@/helpers/firebaseAuth';
import Loader from '@/components/Loader';
import { Grid } from '@mui/material';
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
const useStyles = makeStyles()((theme) => ({
  main: {
    border: '1px solid red',
    width: '100%',
    alignSelf: 'flex-start',
  },
  label: {
    marginTop: '1rem',
    marginBottom: 0,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    border: '20px solid red',
  },
  input: {
    marginBottom: '1rem',
  },
}));

const CreateListing = () => {
  const { classes } = useStyles();

  const [geolocationEnabled, setGeolocationEnabled] = useState(false);
  const [formData, setFormData] = useState({
    type: 'rent',
    name: '',
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: '',
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
    images: {},
    latitude: 0,
    longitude: 0,
    userRef: '',
  });
  const [loading, setLoading] = useState(false);
  const { auth } = firebaseAuth();
  const navigate = useNavigate();
  const mounted = useRef(true);
  const {
    address,
    bathrooms,
    bedrooms,
    discountedPrice,
    furnished,
    images,
    latitude,
    longitude,
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
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const onMutate = () => {
    // setFormData((prevState) => ({ ...prevState, type: 'sale' }));
  };
  return (
    <Container>
      <header>
        <Subtitle>Create a Listing </Subtitle>
      </header>
      <main className={classes.main}>
        <form
          onSubmit={onSubmit}
          className={classes.form}
          style={{ border: '3px solid blue' }}
        >
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

          <BRealFormContainer>
            <Grid>
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
              <BRealFormSubContainer icon={<HomeIcon fontSize='large' />}>
                <BReFormLabel label='address'>Address</BReFormLabel>
                <textarea
                  className='formInputAddress'
                  // type='text'
                  id='address'
                  value={address}
                  onChange={onMutate}
                  required
                />
              </BRealFormSubContainer>
            </Grid>
            <Grid>
              <BRealFormSubContainer icon={<LocationOnIcon fontSize='large' />}>
                {!geolocationEnabled && (
                  <Grid>
                    <Grid>
                      <BReFormLabel>Latitude</BReFormLabel>
                      <BRealFormInput
                        className={classes.input}
                        type='number'
                        id='latitude'
                        value={latitude}
                        onChange={onMutate}
                        required
                      />
                    </Grid>
                    <Grid>
                      <BReFormLabel>Longitude</BReFormLabel>
                      <BRealFormInput
                        className={classes.input}
                        type='number'
                        id='longitude'
                        value={longitude}
                        onChange={onMutate}
                        required
                      />
                    </Grid>
                  </Grid>
                )}
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
                  {type === 'rent' && (
                    <p className='formPriceText'>$ / Month</p>
                  )}
                </Grid>
                {offer && (
                  <>
                    <BReFormLabel>Discounted Price</BReFormLabel>
                    <BRealFormInput
                      type='number'
                      id='discountedPrice'
                      value={'discountedPrice'}
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
                  <p className='imagesInfo'>
                    The first image will be the cover (max 6).
                  </p>
                  <BRealFormInput
                    type='file'
                    id='images'
                    onChange={onMutate}
                    max={6}
                    accept='.jpg,.png,.jpeg'
                    multiple
                    required
                  />
                  <BRealButton type='submit'>Create Listing</BRealButton>
                </BRealFormSubContainer>
              </Grid>
            </Grid>
          </BRealFormContainer>
        </form>
      </main>
    </Container>
  );
};

export default CreateListing;
