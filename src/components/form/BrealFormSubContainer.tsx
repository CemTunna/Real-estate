import { Grid } from '@mui/material';
import React from 'react';
interface Props {
  children: React.ReactNode;
  icon: any;
}
const BRealFormSubContainer = ({ children, icon }: Props) => {
  return (
    <Grid
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Grid>{children}</Grid>
    </Grid>
  );
};

export default BRealFormSubContainer;
