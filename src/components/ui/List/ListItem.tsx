import React from 'react';
import { ListItem as MuiListItem } from '@mui/material';
import useStyles from './ListItemStyles';
import classNames from 'classnames';
interface Props {
  children: React.ReactNode;
  className?: string;
}
const ListItem = ({ children, className }: Props) => {
  const { classes } = useStyles();

  return (
    <MuiListItem
      className={
        !className ? classes.item : classNames(classes.item, className)
      }
    >
      {children}
    </MuiListItem>
  );
};

export default ListItem;
