import React, {useState} from 'react'
import Box from '@mui/material/Box';
import { flexCenter, dFlex, flexBetweenCenter } from '../theme/styles';

import Container from '@mui/material/Container';
import {Link} from "react-router-dom";
import {AiOutlineHome, AiOutlineCoffee} from 'react-icons/ai';
import {IoIosInformationCircle} from 'react-icons/io';

function NavBar() {



  return (
    <div>


      <nav className='nav'>
            <ul className='links'>
              <li>
                
                <Link to='/'>
                  <AiOutlineHome size={20}/>
              </Link>

              <Link to='/about'>
              <IoIosInformationCircle size={20}/>
              
              </Link>

              <Link to='/tea'>
                <AiOutlineCoffee size={20}/>
              </Link>
              


            
              </li>
            </ul>

         </nav>

      {/* <Box sx={{ minHeight: 50, borderBottom: '1px solid #ddd'}}>
     */}


      
       {/* <Container>
          <Box> */}
             
          
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