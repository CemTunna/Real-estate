import React from 'react';
import { ListItem, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useStyles from './NavbarStyles';
interface Props {
  navItem: {
    navigateTo: string;
    navItemicon: React.ReactNode;
  };
}
const NavbarItem = ({ navItem }: Props) => {
  const { navigateTo, navItemicon } = navItem;
  const navigate = useNavigate();

  const { classes } = useStyles();
  return (
    <ListItem className={classes.item}>
      <IconButton className={classes.btn} onClick={() => navigate(navigateTo)}>
        {navItemicon}
      </IconButton>
    </ListItem>
  );
};

export default NavbarItem;
