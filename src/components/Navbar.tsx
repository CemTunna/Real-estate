import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Button, Grid, List, ListItem } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ExploreIcon from '@mui/icons-material/Explore';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HeaderTitle from './HeaderTitle';

const useStyles = makeStyles()((theme) => ({
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
    },
  },
  icon: {
    marginRight: '0.2rem',
  },
  list: {
    display: 'flex',
    justifyContent: 'space-around',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    [theme.breakpoints.down('lg')]: {
      marginTop: '1rem',
    },
  },
  btn: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.light,
    letterSpacing: '0.5px',
    border: '1px solid transparent',
    width: '10rem',
    '&:hover': {
      borderColor: theme.palette.secondary.main,
      color: theme.palette.secondary.main,
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
    },
  },
}));
const Navbar = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header className={classes.navbar}>
      <Grid>
        <HeaderTitle />
      </Grid>
      <List className={classes.list}>
        <ListItem>
          <Button className={classes.btn} onClick={() => navigate('/offers')}>
            <LocalOfferIcon className={classes.icon} />
            Offers
          </Button>
        </ListItem>
        <ListItem>
          <Button className={classes.btn} onClick={() => navigate('/')}>
            <ExploreIcon className={classes.icon} />
            Explorer
          </Button>
        </ListItem>
        <ListItem>
          <Button className={classes.btn} onClick={() => navigate('/profile')}>
            <PersonOutlineIcon className={classes.icon} />
            Profile
          </Button>
        </ListItem>
      </List>
    </header>
  );
};

export default Navbar;
