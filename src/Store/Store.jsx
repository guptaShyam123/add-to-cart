import {configureStore  } from '@reduxjs/toolkit'
import  cartReducer from './Cartslice'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const Store = configureStore({


    reducer:{
   cart:cartReducer
    },
     middleware:[thunk , logger]
    
})

export default Store