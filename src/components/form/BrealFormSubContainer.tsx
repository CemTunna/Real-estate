import { Grid } from '@mui/material';
import React from 'react';
interface Props {
  children: React.ReactNode;
}
const BrealFormSubContainer = ({ children }: Props) => {
  return (
    <Grid
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {children}
    </Grid>
  );
};

export default BrealFormSubContainer;
