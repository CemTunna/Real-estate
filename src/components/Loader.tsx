import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const Loader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
      }}
    >
      <CircularProgress color='secondary' size={70} />
    </Box>
  );
};

export default Loader;
