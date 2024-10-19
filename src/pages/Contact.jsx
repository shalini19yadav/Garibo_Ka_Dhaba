import React from 'react'
import Layout from '../components/Layout/Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my:8, ml:10, "& h4":{ fontWeight:"bold", mb:2 }, "@media (max-width:390px)":{ml:2} }}>
        <Typography variant='h4'>
          Contact My Restaurant
        </Typography>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo iste autem necessitatibus doloribus! Vero beatae aperiam porro, exercitationem rerum facere repudiandae enim similique ea minima, deserunt, magnam cum expedita! Corrupti sequi adipisci ullam commodi corporis facere eum expedita esse similique!
        </p>
      </Box>
      <Box sx={{m:3, width:"530px", ml:10, "@media (max-width:600px)":{width:"300px"}, "@media (max-width:390px)":{ml:2}}}>
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:"black", color:"white",}} align="center">Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color:"red", pt:1}}/> 1800-00-0000 (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{color:"skyblue", pt:1}}/> help@hotel.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{color:"green", pt:1}}/> 1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact
