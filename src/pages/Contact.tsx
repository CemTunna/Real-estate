import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import { toast } from 'react-toastify';
const Contact = () => {
  const [message, setMessage] = useState('');
  const [landlord, setLandLord] = useState<any>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();
  useEffect(() => {
    const landLord = async () => {
      // const docRef = doc(db, 'listings', params.landlordId);
      // const docSnap = await getDoc(docRef);
      // if (docSnap.exists()) {
      //   setLandLord(docSnap.data());
      // } else {
      //   toast.error('Could not get landlord data');
      // }
    };
    landLord();
  }, [params.landlordId]);
  const onChange = (e: any) => {
    setMessage(e.target.value);
  };
  return (
    <div>
      <header>
        <p>Contact Landlord</p>
      </header>

      {landlord !== null && (
        <main>
          <div>
            <p>Contact {landlord?.name!}</p>
          </div>

          <form>
            <div>
              <label htmlFor='message'>Message</label>
              <textarea
                name='message'
                id='message'
                value={message}
                onChange={onChange}
              ></textarea>
            </div>

            <a
              href={`mailto:${landlord.email}?Subject=${searchParams.get(
                'listingName'
              )}&body=${message}`}
            >
              <button type='button'>Send Message</button>
            </a>
          </form>
        </main>
      )}
    </div>
  );
};

export default Contact;
