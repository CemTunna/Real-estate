import { Typography } from '@mui/material';
import React from 'react';
import classNames from 'classnames';
import useStyles from './TextStyles';
interface Props {
  className?: string;
  children: React.ReactNode;
}

const Text = ({ className, children }: Props) => {
  const { classes } = useStyles();

  return (
    <Typography
      className={
        !className ? classes.text : classNames(className, classes.text)
      }
    >
      {children}
    </Typography>
  );
};

export default Text;
