import React from 'react'
import Layout from '../components/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
   
    <Layout>
       <Box
       sx={{
        my:12,
        textAlign:'center',
        "& h6":{
         fontWeight:'bold',
         my:3,
         fontSize:'2.5rem'
        },
        "& p":{
         textAlign:'justify'
        },
        '@media (max-width:600px)':{
          mt:0,
          '& h6':{
            fontSize:'1.8rem'
          }
        }

        }}>
           <Typography variant='h6'>
              WELCOME TO APNA RASOI
          </Typography>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minus, excepturi suscipit consequatur quod deleniti nesciunt id sit qui modi laborum, non nostrum tempora. Mollitia repellendus totam iure sint suscipit molestias aperiam eligendi consequuntur blanditiis ad! Expedita provident tempore numquam molestiae suscipit consequuntur fugiat doloremque quod eum nam, adipisci perferendis?</p>
              <br />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, quis veritatis deserunt, obcaecati, eaque est beatae cupiditate quaerat molestiae aperiam incidunt pariatur sapiente sequi aut expedita delectus sit. Odio ex, distinctio tenetur voluptas velit eaque dolorum quasi eius eum ipsa ipsum sunt ut numquam commodi delectus fuga at repellat, id voluptates animi sit optio. Dignissimos odit ducimus consequatur laborum est ut quaerat tempora asperiores numquam explicabo nisi dicta deserunt quibusdam consectetur dolore mollitia quisquam quam alias omnis magnam fuga, sint perferendis nulla! Quod perferendis culpa placeat officiis laborum quidem quae! Et provident vel earum nihil ullam doloremque numquam eius accusantium libero enim quod quam, sed dignissimos quibusdam ipsa! Possimus repudiandae numquam omnis blanditiis dolorum maiores accusamus. Qui ipsam, esse, quo et modi omnis ea eaque numquam error necessitatibus magnam commodi dolorum molestias aperiam quas, hic molestiae corrupti voluptatum praesentium porro tempore blanditiis facilis totam. Reprehenderit hic deserunt culpa at excepturi quisquam in ullam obcaecati ea, labore expedita fuga, modi enim saepe ad accusamus nobis. Itaque quo commodi dolor eaque, dicta cum deleniti alias, magnam debitis quae et nam a dolores maxime eos ab. Dignissimos hic vitae, quidem optio rerum nulla aliquid possimus repellendus obcaecati repudiandae natus sapiente dolore eveniet quasi.</p>

            
           
         </Box>
    </Layout>
  )
}

export default About