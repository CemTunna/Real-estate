import React from 'react';
import List from '@/components/ui/List/List';
import CategoryListItem from './CategoryListItem';
import Listings from './interface';
interface Props {
  listings: Listings[];
}
const CategoryList = ({ listings }: Props) => {
  return (
    <List>
      {listings.map((listing) => (
        <CategoryListItem listing={listing} key={listing.id} />
      ))}
    </List>
  );
};

export default CategoryList;
