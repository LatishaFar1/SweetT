import React from 'react'
import Box from '@mui/material/Box';
import { flexCenter, dFlex, flexBetweenCenter } from '../theme/styles';
import logo from '../photos/logo.jpeg';
import Container from '@mui/material/Container';
import {Link} from "react-router-dom";

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

          <div className='nav'>

              <Link to='/'>
                  Home
              </Link>


              <Link to='/tea'>
                  Tea
              </Link>

          </div>

      </Box>
    </div>
  )
}

export default NavBar