import React from 'react';
import { Grid } from '@mui/material';
interface Props {
  children: React.ReactNode;
}
const BRealFormContainer = ({ children }: Props) => {
  return <Grid style={{ display: 'flex' }}>{children}</Grid>;
};

export default BRealFormContainer;
