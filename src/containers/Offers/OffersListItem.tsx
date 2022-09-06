import React from 'react';
import ListItem from '@/components/ui/List/ListItem';
import { Grid, IconButton } from '@mui/material';
import Text from '@/components/ui/Text/Text';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import useStyles from './OffersListItemStyles';
import { Listings } from '@/interfaces/Listing';
interface Props {
  offerItem: Listings;
  onDelete?: () => void;
  onEdit?: (e: string) => void;
}
const OffersListItem = ({ onDelete, onEdit, offerItem }: Props) => {
  const {
    data: {
      bathrooms,
      bedrooms,
      type,
      name,
      offer,
      location,
      regularPrice,
      imgUrls,
      discountedPrice,
    },
    id,
  } = offerItem;

  const { classes } = useStyles();
  return (
    <ListItem className={classes.container}>
      <Link to={`/category/${type}/${id}`} className={classes.link}>
        <img
          className={classes.img}
          width={200}
          height={150}
          src={imgUrls[0]}
          loading='lazy'
          alt={name}
        />
        <Grid className={classes.nameContainer}>
          <Grid className={classes.subNameContainer}>
            <Text>{location}</Text>
            <Text className={classes.text}>{name}</Text>
            <Text className={classes.text}>
              $
              {offer
                ? discountedPrice!
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                : regularPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              {type === 'rent' && ' / Month'}
            </Text>
          </Grid>
          <Grid className={classes.utilityContainer}>
            <Grid className={classes.subUtilityContainer}>
              <BedIcon className={classes.icon} />
              <Text>{bedrooms > 1 ? `${bedrooms} Bedrooms` : '1 Bedrom'}</Text>
            </Grid>
            <Grid className={classes.subUtilityContainer}>
              <BathtubIcon className={classes.icon} />
              <Text>
                {bathrooms > 1 ? `${bathrooms} bathrooms` : '1 Bathroom'}
              </Text>
            </Grid>
          </Grid>
        </Grid>
      </Link>
      <Grid style={{ display: 'flex' }}>
        {onDelete && (
          <IconButton onClick={onDelete}>
            <DeleteIcon style={{ color: 'red' }} />
          </IconButton>
        )}
        {onEdit && (
          <IconButton onClick={() => onEdit(id!)}>
            <EditIcon />
          </IconButton>
        )}
      </Grid>
    </ListItem>
  );
};

export default OffersListItem;
