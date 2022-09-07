import React from 'react'
import Box from '@mui/material/Box';
import { flexCenter, dFlex, flexBetweenCenter } from '../theme/styles';
import logo from '../photos/logo.jpeg';
import Container from '@mui/material/Container';

function NavBar() {
  return (
    <div>
      <Box sx={{...dFlex, minHeight: 50, borderBottom: '1px solid #ddd'}}>
    

       <Container maxWidth='xl'>
          <Box sx={{
            ...flexBetweenCenter, minHeight: 50, px: 4
          }}>
             

              <img src={logo} className='logo' alt='sweet t logo' />
              
          </Box>
       </Container>

      </Box>
    </div>
  )
}

export default NavBar