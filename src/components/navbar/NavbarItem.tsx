import React from 'react';
import { ListItem, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useStyles from './NavbarStyles';
import classNames from 'classnames';
interface Props {
  navItem: {
    navigateTo: string;
    navItemicon: React.ReactNode;
    isCurrentUrl: boolean;
  };
}
const NavbarItem = ({ navItem }: Props) => {
  const { navigateTo, navItemicon, isCurrentUrl } = navItem;
  const navigate = useNavigate();

  const { classes } = useStyles();
  return (
    <ListItem className={classes.item}>
      <IconButton
        className={
          isCurrentUrl
            ? classNames(classes.activeBtn, classes.btn)
            : classes.btn
        }
        onClick={() => navigate(navigateTo)}
      >
        {navItemicon}
      </IconButton>
    </ListItem>
  );
};

export default NavbarItem;
