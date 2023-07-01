import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import back2 from '../images/back2.jpg'
import '../Style/Home.css'

const Home = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage:`url(${back2})`}} >
           <div className='container'>
           <h1>Apka khana </h1> 
           <p>This is the best delicious food in the world</p>
            <Link to='/menu'><button>order now</button></Link>
           
           </div>
      </div>
       
    </Layout>
  )
}

export default Home