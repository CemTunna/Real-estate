import { Grid, IconButton, ListItem, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import BReText from './BReText';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface Props {
  listing: any;
  id: string;
  onDelete?: () => void;
  onEdit?: (e: string) => void;
}
const useStyles = makeStyles()((theme) => ({
  listContainer: {
    padding: 0,
    border: '1px solid #3333337d',
    borderRadius: '10px',
    overflow: 'hidden',
    transition: 'all .5s ease-out',
    marginBottom: '1rem',
    marginRight: '1rem',
    maxHeight: '15rem',
    '&:hover': {
      boxShadow:
        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: '0',
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '40rem',
    },
  },
  link: {
    display: 'flex',
    justifyContent: 'space-between',
    textDecoration: 'none',
    padding: 0,
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      marginBottom: 0,
    },
  },
  text: {
    fontWeight: theme.typography.fontWeightBold,
    marginTop: '0.5rem',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0.7rem',
      marginTop: '0',
    },
  },
  icon: {
    color: theme.palette.primary.dark,
    marginRight: '1rem',
  },
  bodyContainer: {
    width: '60%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      flexDirection: 'column',
      overflowY: 'scroll',
      height: '100%',
    },
  },
  infoCon: {
    width: '40%',
    [theme.breakpoints.down('sm')]: {
      // display: 'flex',
      width: '100%',
    },
  },
  subPart: {
    display: 'flex',
    justifyContent: 'center',

    width: '60%',
    [theme.breakpoints.down('md')]: {
      marginTop: '1rem',
      width: '100%',
    },
  },
  img: {
    width: '40%',
    margin: 0,
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '10rem',
      margin: 0,
    },
  },
  subContainer: {
    display: 'flex',
    width: '100%',
  },
}));
const BReListItem = ({ listing, id, onDelete, onEdit }: Props) => {
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
          <Grid className={classes.infoCon}>
            <BReText>{listing.location}</BReText>
            <BReText className={classes.text}>{listing.name}</BReText>
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
          <Grid className={classes.subPart}>
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
      <Grid style={{ display: 'flex' }}>
        {onDelete && (
          <IconButton onClick={onDelete}>
            <DeleteIcon style={{ color: 'red' }} />
          </IconButton>
        )}
        {onEdit && (
          <IconButton onClick={() => onEdit(id)}>
            <EditIcon />
          </IconButton>
        )}
      </Grid>
    </ListItem>
  );
};

export default BReListItem;
