import React from 'react';
import List from '@/components/ui/List/List';
import CategoryListItem from './CategoryListItem';
import { Listings } from '@/interfaces/Listing';
interface Props {
  houses: Listings[];
}
const CategoryList = ({ houses }: Props) => {
  return (
    <List>
      {houses.map((listing) => (
        <CategoryListItem listing={listing} key={listing.id} />
      ))}
    </List>
  );
};

export default CategoryList;
