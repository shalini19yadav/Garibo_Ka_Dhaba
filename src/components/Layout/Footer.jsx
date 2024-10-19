import { Box, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <>
        <Box sx={{textAlign:'center', color:'white', bgcolor:'#1A1A19', p:3}}>
            <Box sx={{my:3, "& svg":{fontSize:'50px', cursor:"pointer",mr:2,}, "& svg:hover": {color:"rosybrown",transform:"translateX(5px)", transition:"all 400ms"}}}>
                <InstagramIcon/>
                <FacebookIcon/>
                <GitHubIcon/>
                <TwitterIcon/>
            </Box>
            <Typography variant='h5' sx={{ "@media (max-width:600px)":{
                fontSize:'1rem'},}}>
                All Right reserved &copy: Techinfo YT
            </Typography>
        </Box>

    </>
  )
}

export default Footer
