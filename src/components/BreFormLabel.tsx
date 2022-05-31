import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import { makeStyles } from 'tss-react/mui';

interface Props {
  label: string;
  children: React.ReactNode;
}
const useStyles = makeStyles()((theme) => ({
  text: {
    letterSpacing: '0.5px',
    color: theme.palette.primary.dark,
    fontWeight: theme.typography.fontWeightBold,
  },
}));
const BreFormLabel = ({ children, label }: Props) => {
  const { classes } = useStyles();

  return (
    <InputLabel htmlFor={label} className={classes.text}>
      {children}
    </InputLabel>
  );
};

export default BreFormLabel;
