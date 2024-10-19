import React, { useState } from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink } from 'react-router-dom';
import '../../styles/HeaderStyles.css'
import LocalDiningIcon from '@mui/icons-material/LocalDining';

const Navbar = () => {

    const [mobileView, setMobileView] = useState(false);

    //handle menuclick
    const handleDrawertoggle=()=>{
        setMobileView(!mobileView)
    }

    //menu drawer

    const drawer=(

        <Box onclick={handleDrawertoggle} sx={{textAlign:'center'}}>
             <Typography component={'div'} variant='h6' color='royalblue' sx={{flexGrow:'1', my:2}}>
                <LocalDiningIcon/> 
                Gareebo_Ka_Dhaba
             </Typography>
             <Divider/>
                <ul className='mobile-navigation'>
                    <li>  <NavLink activeClassName="active" to={'/'}>Home</NavLink>  </li>
                    <li>  <NavLink to={'/about'}>About</NavLink>  </li>
                    <li>  <NavLink to={'/menu'}>Menu</NavLink>  </li>
                    <li>  <NavLink to={'/contact'}>Contact</NavLink>  </li>
                </ul>
        </Box>
    )

  return (
    <>
    <Box>
      <AppBar component={'nav'} sx={{bgcolor:'black'}}>
        <Toolbar>
            <IconButton color='inherit' aria-label='drawer' edge='start' sx={{mr:2, display:{sm:'none'},}} onClick={handleDrawertoggle}>
            <MenuIcon/>
            </IconButton>
             <Typography component={'div'} variant='h6' color='royalblue' sx={{flexGrow:'1'}}>
                <LocalDiningIcon/> 
                Gareebo_Ka_Dhaba
             </Typography>
             <Box sx={{display: {xs:'none', sm:'block'}}}>    
                <ul className='navigation-menu'>
                    <li>  <NavLink activeClassName="active" to={'/'}>Home</NavLink>  </li>
                    <li>  <NavLink to={'/about'}>About</NavLink>  </li>
                    <li>  <NavLink to={'/menu'}>Menu</NavLink>  </li>
                    <li>  <NavLink to={'/contact'}>Contact</NavLink>  </li>
                </ul>
             </Box>
        </Toolbar>
      </AppBar>
      <Box component={"nav"}>
        <Drawer 
         variant='temporary'
         open={mobileView} onClose={handleDrawertoggle} 
         sx={{display:{xs:'block', sm:'none'},
         "& .MuiDrawer-paper":{
            boxSizing:"border-box",
            width:'240px'
         },
        }}>
            {drawer}
        </Drawer>
      </Box>
      <Box >
      <Toolbar/>
      </Box>
    </Box>
    </>
  );
};

export default Navbar
