import React, {useState} from 'react'
import Box from '@mui/material/Box';
import { flexCenter, dFlex, flexBetweenCenter } from '../theme/styles';
import logo from '../photos/logo.jpeg';
import Container from '@mui/material/Container';
import {Link} from "react-router-dom";
import {AiOutlineHome, AiOutlineCoffee} from 'react-icons/ai';

function NavBar() {



  return (
    <div>


      <nav className='nav'>
            <ul className='links'>
              <li>
                
                <Link to='/'>
                  <AiOutlineHome size={20}/>
              </Link>


              <Link to='/tea'>
                <AiOutlineCoffee size={20}/>
              </Link>

            
              </li>
            </ul>

         </nav>

      {/* <Box sx={{ minHeight: 50, borderBottom: '1px solid #ddd'}}>
     */}
        <div className='row'>

      
       {/* <Container>
          <Box> */}
             
              <img src={logo} size={100} className='logo' alt='sweet t logo' />
              </div>
          {/* </Box>
       </Container> */}



          {/* <div className='nav'>
            <div className='nav-menu'>
      
                  <ul className='links'>

                  </ul>
             
              </div>
            </div>
         */}



              
    
{/* 
      </Box> */}
    </div>
  )
}

export default NavBar