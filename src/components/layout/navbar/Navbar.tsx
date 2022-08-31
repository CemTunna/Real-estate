import React from 'react';
import useStyles from './NavbarStyles';
import { Button, Grid, List, ListItem } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ExploreIcon from '@mui/icons-material/Explore';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HeaderTitle from '../../HeaderTitle';

const Navbar = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header className={classes.navbar}>
      <Grid>
        <HeaderTitle />
      </Grid>
      <nav>
        <List className={classes.list}>
          <ListItem>
            <Button className={classes.btn} onClick={() => navigate('/offers')}>
              Offers
              <LocalOfferIcon className={classes.icon} />
            </Button>
          </ListItem>
          <ListItem>
            <Button className={classes.btn} onClick={() => navigate('/')}>
              Explorer
              <ExploreIcon className={classes.icon} />
            </Button>
          </ListItem>
          <ListItem>
            <Button
              className={classes.btn}
              onClick={() => navigate('/profile')}
            >
              Profile
              <PersonOutlineIcon className={classes.icon} />
            </Button>
          </ListItem>
        </List>
      </nav>
    </header>
  );
};

export default Navbar;
