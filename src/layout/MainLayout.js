import { Box, Stack } from '@mui/material';
import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

function MainLayout() {
  return (
    <Stack sx={{ minHeight: '100vh'}}>
      <Header/>
      <Main/>
      <Outlet/>
      <Box sx={{flexGrow: 1}}/>
      <Footer/>
    </Stack>
  )
}

export default MainLayout
