import { Grid, ListItem, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import BReText from './BReText';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
interface Props {
  listing: any;
  id: string;
  onDelete?: () => void;
}
const useStyles = makeStyles()((theme) => ({
  listContainer: {
    padding: 0,
    border: '1px solid #3333337d',
    borderRadius: '10px',
    overflow: 'hidden',
    flex: 1,
    transition: 'all .5s ease-out',
    marginBottom: '1rem',
    marginRight: '1rem',
    '&:hover': {
      boxShadow:
        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
    },
  },
  link: {
    display: 'flex',
    justifyContent: 'space-between',
    textDecoration: 'none',
    padding: 0,
    width: '100%',
    height: '10rem',
  },
  text: {
    fontWeight: theme.typography.fontWeightBold,
  },
  icon: {
    color: theme.palette.primary.dark,
    marginRight: '1rem',
  },
  bodyContainer: {
    width: '80%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
  },
  img: {
    width: '20%',
    height: '100%',
    margin: 0,
  },
  subContainer: {
    display: 'flex',
    marginRight: '2rem',
  },
}));
const BReListItem = ({ listing, id, onDelete }: Props) => {
  const { classes } = useStyles();

  return (
    <ListItem className={classes.listContainer}>
      <Link to={`/category/${listing.type}/${id}`} className={classes.link}>
        <img
          className={classes.img}
          width={200}
          height={150}
          src={listing.imgUrls[0]}
          loading='lazy'
          alt={listing.name}
        />
        <Grid className={classes.bodyContainer}>
          <Grid>
            <BReText>{listing.location}</BReText>
            <BReText>{listing.name}</BReText>
            <BReText className={classes.text}>
              $
              {listing.offer
                ? listing.discountedPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                : listing.regularPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              {listing.type === 'rent' && ' / Month'}
            </BReText>
          </Grid>
          <Grid style={{ display: 'flex' }}>
            <Grid className={classes.subContainer}>
              <BedIcon className={classes.icon} />
              <BReText>
                {listing.bedrooms > 1
                  ? `${listing.bedrooms} Bedrooms`
                  : '1 Bedrom'}
              </BReText>
            </Grid>
            <Grid className={classes.subContainer}>
              <BathtubIcon className={classes.icon} />
              <BReText>
                {listing.bathrooms > 1
                  ? `${listing.bathrooms} bathrooms`
                  : '1 Bathroom'}
              </BReText>
            </Grid>
          </Grid>
        </Grid>
      </Link>
      {/* {onDelete && <p>delete icon</p>} */}
      {/* onDelete(listing.id,listing.name) */}
    </ListItem>
  );
};

export default BReListItem;
