import List from '@/components/ui/List/List';
import React from 'react';
import OffersListItem from './OffersListItem';
import { Listings } from '@/interfaces/Listing';
interface Props {
  houses: Listings[];
}
const OffersList = ({ houses }: Props) => {
  return (
    <List>
      {houses.map((offer) => (
        <OffersListItem offerItem={offer} key={offer.id} />
      ))}
    </List>
  );
};

export default OffersList;
