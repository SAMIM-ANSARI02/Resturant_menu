import React, { useState } from 'react'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { AppBar, Box, Typography,Toolbar, IconButton ,Drawer, Divider}  from '@mui/material'
import {Link,NavLink} from 'react-router-dom';
import '../Style/Headerstyle.css'
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Layout from './Layout';



const Header = () => {
  
  const[mobile ,setmobiletoggle]=useState(false)
  // handle menu

const handlemenu=()=>{
  setmobiletoggle(!mobile)
} 
// menu drawer
const drawer=(
     <Box onClick={handlemenu} sx={{textAlign:'center'}}>
      <Typography color={'goldenrod'} 
                        variant='h6' 
                        component={'div'} 
                        sx={{flexGrow:1, my:2}}>
                       <RestaurantMenuIcon/>
                        Apka Apna Resturant
                  </Typography>
                  <Divider/>
                  
                    <ul className='Navigationmobile'>
                       <li><NavLink to={'/'}>Home</NavLink></li>
                       <li><NavLink to={'/Menu'}>menu</NavLink></li>
                       <li><NavLink to={'/About'}>About</NavLink></li>
                       <li><NavLink to={'/contact'}>Contact</NavLink></li>
                  </ul>
                  
      
      </Box>
)
 return (
    <div>
         
         <Box>
            <AppBar component={'nav'} sx={{bgcolor:'black'}}>
              <Toolbar>
                   <IconButton color='inherit' aria-label='open drawer' edge='start'
                   sx={{ mr:2, display:{sm:'none'}}}
                   onClick={handlemenu}>
                     <MenuIcon/>
                    </IconButton>
                   <Typography color={'goldenrod'} 
                        variant='h6' 
                        component={'div'} 
                        sx={{flexGrow:1}}>
                       <RestaurantMenuIcon/>
                        Apka Apna Resturant
                  </Typography>
                  <Box sx={{display:{xs:'none',sm:'block'}}}>
                    
                    <ul className='NavigationMenu'>
                       <li><NavLink activeClassName='active' to={'/'}>Home</NavLink></li>
                       <li><NavLink to={'/Menu'}>menu</NavLink></li>
                       <li><NavLink to={'/About'}>About</NavLink></li>
                       <li><NavLink to={'/contact'}>Contact</NavLink></li>
                       <ShoppingCartOutlinedIcon activeClassName='active'/>
                       
                  </ul>
                  
                  </Box>
                 
               </Toolbar>
            </AppBar>
            <Box component={'nav'}>
                <Drawer variant="temporary"
                 open={mobile}
                  onClose={handlemenu}
                  sx={{display:{xs:'block',sm:'none'}, 
                  '& .MuiDrawer-paper':{
                    boxSizing:'border-box',
                    width:'280px'
                  }}}>
                  {drawer}
                 </Drawer>
            </Box>
            <Box>
               <Toolbar/>
            </Box>

           
        </Box>
    </div>
  )

}

export default Header