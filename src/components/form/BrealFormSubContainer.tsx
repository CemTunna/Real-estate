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
        border: '1px solid red',
      }}
    >
      <Grid>{children}</Grid>
      {icon}
    </Grid>
  );
};

export default BRealFormSubContainer;
