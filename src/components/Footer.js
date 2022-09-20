import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

function Footer() {
  return (
    <Box mt="80px" bgcolor="#f8f8f8">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="80px"/>
        <Typography variant="h5" pb="40px" >
        The only bad training is the one you don't do !
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer