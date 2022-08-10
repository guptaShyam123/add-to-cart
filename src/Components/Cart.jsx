import React from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import {remove} from '../Store/Cartslice'
const Cart = () => {
      const products = useSelector((state) => state.cart)

     const dispatch = useDispatch()

      const handle = (product)=> {
            dispatch(remove(product))
      }

  return (
    <> 
    <div>
   {
       products.map((product) => {
             return(
                <>
                 <img style={{height:'250px' , width:'260px'}} src={product.img} />
                  <h3>{product.title}</h3>
                  <h4>{product.prize}</h4>
                  <button onClick={(e)=>{handle(product.id)}}>remove</button>
                </>
             )
        
       })
   }
   </div>
    </>
   
  )
}

export default Cart