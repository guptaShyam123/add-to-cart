import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'

const Maindiv = styled.div`
   display:flex;
   gap:20px;
   
    background-color:skyblue;
    
  height:10vh;
  
`
const Para = styled.p`
font-family:monospace;
   font-size:20px;
   color:black;
   font-weight:bold;
   margin-top:25px;
   margin-left:20px;
    
`
const Navbar = () => {
  let value = useSelector((state) => state.cart)

    const cart = JSON.parse(localStorage.getItem('cart'))
      console.log(cart)
  return (
       <>
     <Maindiv>
      <Para>Redux</Para>
      <Link style={{textDecoration: 'none'}}  to="/cart"> <Para>Cart</Para></Link>
     <Link style={{textDecoration:'none'}} to="/"> <Para >Home</Para>  </Link>
    <Para> Cart items:{(value?.length)} </Para> 
     </Maindiv>
    
    </>
  )
}

export default Navbar