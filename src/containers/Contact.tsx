import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import { toast } from 'react-toastify';
import Subtitle from '@/components/Subtitle';
import { Grid, TextareaAutosize } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import BReText from '@/components/BReText';
import BReFormLabel from '@/components/form/BReFormLabel';
import BRealFormButton from '@/components/form/BRealFormButton';

const useStyles = makeStyles()((theme) => ({
  contact: {
    fontWeight: theme.typography.fontWeightBold,
    marginTop: '1rem',
  },
  label: {
    marginTop: '2rem',
  },
  textArea: {
    border: '1px solid #e74c0e',
    outline: 'none',
    padding: '0.375rem 0.5rem',
  },
  btn: {
    letterSpacing: '0.5px',
    textTransform: 'capitalize',
    borderRadius: '4px',
    padding: '0.375rem 0.5rem',
    cursor: 'pointer',
    width: '10rem',
    backgroundColor: theme.palette.secondary.dark,
    border: '1px solid #e74c0e',
    color: theme.palette.primary.light,
  },
}));

const Contact = () => {
  const { classes } = useStyles();
  const [message, setMessage] = useState('');
  const [landlord, setLandLord] = useState<any>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();
  useEffect(() => {
    const landLord = async () => {
      const docRef = doc(db, 'users', params.landlordId!.toString());
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLandLord(docSnap.data());
      } else {
        toast.error('Could not get landlord data');
      }
    };
    landLord();
  }, [params.landlordId]);
  const onChange = (e: any) => {
    setMessage(e.target.value);
  };

  return (
    <Grid style={{ border: '1px solid red', height: '100%', padding: '3rem' }}>
      <Subtitle>Contact Landlord</Subtitle>

      {landlord !== null && (
        <main>
          <Grid>
            <BReText className={classes.contact}>
              Contact {landlord?.name!}
            </BReText>
          </Grid>

          <form>
            <Grid>
              <BReFormLabel className={classes.label} label='message'>
                Message
              </BReFormLabel>

              <TextareaAutosize
                minRows={3}
                name='message'
                id='message'
                value={message}
                onChange={onChange}
                style={{ width: 500, height: 300 }}
                className={classes.textArea}
              />
            </Grid>

            <a
              href={`mailto:${landlord.email}?Subject=${searchParams.get(
                'listingName'
              )}&body=${message}`}
            >
              <button className={classes.btn} type='button'>
                Send Message
              </button>
            </a>
          </form>
        </main>
      )}
    </Grid>
  );
};

export default Contact;
