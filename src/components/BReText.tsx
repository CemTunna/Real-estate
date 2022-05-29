import { Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import classNames from 'classnames';
interface Props {
  className?: string;
  children: React.ReactNode;
}
const useStyles = makeStyles()((theme) => ({
  text: {
    color: theme.palette.primary.dark,
    letterSpacing: '0.5px',
  },
}));
const BReText = ({ className, children }: Props) => {
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

export default BReText;
