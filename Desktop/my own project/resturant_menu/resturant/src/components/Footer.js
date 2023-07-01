import React from 'react'
import { Box, Typography } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:'center',color:'white',bgcolor:'#1A1A19',p:1}}>
        <Box sx={{
            my:1,
            "& svg":{
                fontSize:'40px',
                cursor:"pointer",
                mr:2
            },
            "& svg:hover":{
                color:'goldenrod',
                transform:'translateY(8px)',
                transition:'all 400ms'

            }
        }}>
            {/* icon iteam */}
          
                <WhatsAppIcon/>
                <GitHubIcon/>
                <EmailIcon/>
                <LinkedInIcon/>
      </Box>
        <Typography variant='h5' 
        sx={{"@media (max-width:600px)":{
            fontSize:'0.8rem',
          
        }}}>
            All Rights Reserved &copy; samim-resturant
        </Typography>
    </Box>
    </>
  )
}

export default Footer