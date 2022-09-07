import React from 'react'
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { flexCenter } from '../theme/styles';
import logo from '../photos/logo.jpeg';

function NavBar() {
  return (
    <div>
      <Box sx={flexCenter}>
        <img src={logo}/>
      </Box>
    </div>
  )
}

export default NavBar