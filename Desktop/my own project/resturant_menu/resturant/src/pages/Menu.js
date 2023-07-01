import React from 'react'
import '../Style/Headerstyle.css'
import Layout from '../components/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { menulist } from '../data/Data'

const Menu = () => {
  return (
    <Layout>
        <Box sx={{display:'flex',flexWrap:'wrap' ,justifyContent:'center'}}>
          {menulist.map(menu=>(
             <Card sx={{maxWidth:'400px', m:3}}>
             <CardActionArea>
               <CardMedia
               sx={{ minHeight:'400px'}}
               component={'img'}
               src={menu.Image}
               alt={menu.name}/>
                <CardContent>
                    <Typography variant='h5' gutterBottom component={'div'}>
                    {menu.name}
                    </Typography>
                    <Typography  gutterBottom component={'div'} sx={{color:'grey'}}>
                    {menu.descriptioin}
                    </Typography>
                    <Typography gutterBottom component={'div'} sx={{color:'blue'}}>
                    {menu.price}
                    </Typography>
                    <Typography sx={{
                      display:'flex',
                      justifyContent:'center'
                    }}><button className='btn'>Order</button><button className='btn'>Add To Card</button></Typography>
                </CardContent>

              
                 
             </CardActionArea>
          </Card>

          ))}
          
        </Box>
     </Layout>
  )
}

export default Menu