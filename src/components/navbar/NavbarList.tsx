import React from 'react';
import { List } from '@mui/material';
import NavbarItem from './NavbarItem';
import useStyles from './NavbarStyles';
interface Props {
  items: {
    navigateTo: string;
    navItemicon: React.ReactNode;
    isCurrentUrl: boolean;
  }[];
}
const NavbarList = ({ items }: Props) => {
  const { classes } = useStyles();

  return (
    <List className={classes.list}>
      {items.map((navItem) => (
        <NavbarItem navItem={navItem} key={navItem.navigateTo} />
      ))}
    </List>
  );
};

export default NavbarList;
