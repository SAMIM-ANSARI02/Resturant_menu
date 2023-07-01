import React from 'react'
import Layout from '../components/Layout'
import { Typography ,Box, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper} from '@mui/material'
import CallIcon from '@mui/icons-material/Call';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const Contact = () => {
  return (

    <Layout>
        <Box 
        sx={{
          ml:10,
          my:10,
          '& h5':{
            fontWeight:'bold',
            mb:2
          }
        }}>
             <Typography variant='h5'>
              Contact To My Resturant
             </Typography>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum hic ad delectus, inventore sequi obcaecati nemo itaque. Nostrum, neque nam. Est eius autem quis sint libero. Dolores, ad modi. Id dolorum quo praesentium temporibus esse possimus inventore ad tempora. Quidem nostrum cumque adipisci animi nisi illum ipsa modi iusto odio.</p>
        </Box>

        <Box sx={{m:3, width:'500px',ml:10,"@media (max-width:600px)":{
            width:'400px',
            ml:3
        }}}>
           <TableContainer component={Paper}>
               <table aria-aria-label='contact table'>
                   <TableHead>
                      <TableRow>
                          <TableCell sx={{bgcolor:'black',color:'white',width:'100vw',
                          }} align='center'>Contact detail</TableCell>
                      </TableRow>
                   </TableHead>
                   <TableBody>
                       <TableRow>
                          <TableCell sx={{fontSize:'20px'}}>
                            <SupportAgentIcon sx={{color:'blue',pt:1}}/>(Toll-Free) 06540-15423
                           </TableCell>
                        </TableRow>  
                        <TableRow> 
                           <TableCell sx={{fontSize:'20px'}}>
                            <MarkunreadIcon sx={{color:'blue',pt:1}}/>ijsamimansari02@gmail.com
                           </TableCell>
                        </TableRow>
                        <TableRow> 
                           <TableCell sx={{fontSize:'20px'}}>
                            <CallIcon sx={{color:'blue',pt:1}}/>9971940376
                           </TableCell>
                        </TableRow>
                   </TableBody>

               </table>
           </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact