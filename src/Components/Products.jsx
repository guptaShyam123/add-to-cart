import React from 'react'
import { useDispatch } from 'react-redux'
import {data2} from '..//data2'

import {add} from '../Store/Cartslice'

const Products = () => {

  const dispatch = useDispatch()


  
   
  let handle = (product) => {
        
     (dispatch(add(product)));
   
    

     return true;
                              
}

  
  return (
    <>
     
    
      {data2.map((product)=>{
          return(
            <>
           
             
             <div key = {product.id}>
            
                
             
              
                <img  style={{height:'25vh' , width:'20vw'}} src={product.img} />
               
                <h3>{product.title}</h3>
                
                
                <h3>{product.prize}</h3>
               
                
                <button onClick={(e)=>{handle(product)}}> Add To Cart </button>
                </div>
                 
             
            
             
            </>
          )   
      })}
    
    </>
  )
}

export default Products