import React from 'react'
import {Grid} from 'react-loader-spinner'
import back4 from './images/back4.jpg'
import { colors } from '@mui/material'

const Loading = () => {
  return (
    <>
   <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
       background:'black',
      width:'100vw',
      height:'100vh',
      paddingLeft:'100px',  
    }}>

         <Grid
  height="120"
  width="120"
  color="MediumSeaGreen"
  ariaLabel="grid-loading"
  radius="12.5"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
<div  style={{color:'white',marginTop:'300px',display:'block'}}><h1>Loading...</h1><br />
</div>
 
</div>


</>


  
  )
}

export default Loading