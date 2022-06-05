import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import firebaseAuth from '@/helpers/firebaseAuth';
import { db } from '@/firebase';
import ShareIcon from '@mui/icons-material/Share';
import Loader from '@/components/Loader';
import auth from '@/state/reducers/auth';
const Listing = () => {
  const [listing, setListing] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [shareLinkCopied, setShareLinkCopied] = useState(false);

  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    const fetchListing = async () => {
      const docRef = doc(db, 'listings', params.Id);
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
    <main>
      {/* slider */}
      <div
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          setShareLinkCopied(true);
          setTimeout(() => {
            setShareLinkCopied(false);
          }, 2000);
        }}
      >
        <ShareIcon />
      </div>
      {shareLinkCopied && <p>Link Copied</p>}
      <div>
        <p>
          {listing.name} -{' $'}
          {listing.offer
            ? listing.discountedPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            : listing.regularPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
        <p>{listing.location}</p>
        <p>For {listing.type === 'rent' ? 'Rent' : 'Sale'}</p>
        {listing.offer && (
          <p>${listing.regularPrice - listing.discountedPrice} discount</p>
        )}
        <ul>
          <li>
            {listing.bedrooms > 1
              ? `${listing.bedrooms} Bedrooms`
              : '1 Bedroom'}
          </li>
          <li>
            {listing.bathrooms > 1
              ? `${listing.bathrooms} Bathrooms`
              : '1 Bathroom'}
          </li>
          <li>{listing.parking && 'Parking Spot'}</li>
          <li>{listing.furnished && 'Furnished'}</li>
        </ul>
        <p>Location</p>
        {firebaseAuth().currentuser?.uid !== listing.userRef && (
          <Link to={`/contact/${listing.userRef}?listingName=${listing.name}`}>
            Contact LandLord
          </Link>
        )}
      </div>
    </main>
  );
};

export default Listing;
