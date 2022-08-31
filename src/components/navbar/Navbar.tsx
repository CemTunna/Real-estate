import React from 'react';
import useStyles from './NavbarStyles';
import { Button, Grid, List, ListItem } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ExploreIcon from '@mui/icons-material/Explore';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HeaderTitle from '../HeaderTitle';
import NavbarList from './NavbarList';

const Navbar = () => {
  const { classes } = useStyles();
  const location = useLocation();

  return (
    <header className={classes.navbar}>
      <Grid>
        <HeaderTitle />
      </Grid>
      <nav>
        <NavbarList
          items={[
            {
              navigateTo: '/offers',
              navItemicon: <LocalOfferIcon fontSize='large' />,
            },
            {
              navigateTo: '/',
              navItemicon: <ExploreIcon fontSize='large' />,
            },
            {
              navigateTo: '/profile',
              navItemicon: <PersonOutlineIcon fontSize='large' />,
            },
          ]}
        />
      </nav>
    </header>
  );
};

export default Navbar;
