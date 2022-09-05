import React from 'react';
import { List as MuiList } from '@mui/material';
import useStyles from './ListStyles';
import classNames from 'classnames';
interface Props {
  children: React.ReactNode;
  className?: string;
}
const List = ({ children, className }: Props) => {
  const { classes } = useStyles();

  return (
    <MuiList
      className={
        !className ? classes.list : classNames(classes.list, className)
      }
    >
      {children}
    </MuiList>
  );
};

export default List;
