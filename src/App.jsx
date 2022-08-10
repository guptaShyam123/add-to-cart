import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Products from './Components/Products'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { Provider } from 'react-redux';
import Store from './Store/Store'
import Cart from './Components/Cart'
const App = () => {
  return (
    <Provider store={Store}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    
    <Route path="/" element={<Home/>} />
    <Route path="/products" element={<Products/> } /> 
    <Route path="/cart" element={<Cart/>} />
    </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App