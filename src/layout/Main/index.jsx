import React from 'react';
import { Stack, Box} from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Header';
// Import necessary components

const MainLayout = () => {
  return (
    <Stack spacing={2}>
        <Header/>
      <Box sx={{ overflowY: "scroll", height: "calc(100vh)" }}>
        <Outlet />
      </Box>
    </Stack>
  );
}

export default MainLayout;
