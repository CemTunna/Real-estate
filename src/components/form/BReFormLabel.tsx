import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import { makeStyles } from 'tss-react/mui';
import classNames from 'classnames';
interface Props {
  label?: string;
  children: React.ReactNode;
  className?: string;
}
const useStyles = makeStyles()((theme) => ({
  text: {
    letterSpacing: '0.5px',
    color: theme.palette.primary.dark,
    fontWeight: theme.typography.fontWeightBold,
  },
}));
const BReFormLabel = ({ className, children, label }: Props) => {
  const { classes } = useStyles();

  return (
    <InputLabel
      htmlFor={label && label}
      className={
        !className ? classes.text : classNames(className, classes.text)
      }
    >
      {children}
    </InputLabel>
  );
};

export default BReFormLabel;
