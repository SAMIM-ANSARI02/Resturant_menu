import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import cart from './cart'

const Layout = ({children}) => {
  const[cart,setcart]=useState([])
  return (
    <>
    <Header size={cart.length}/>
    <div>{children}</div>
    <Footer/>
    </>
  )
}

export default Layout