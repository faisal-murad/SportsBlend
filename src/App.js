import React from 'react'
import './App.css'
import shirtBack from './assets/shirtBack.jpg'
import ProductList from './components/ProductList/ProductList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import soccerimage from './assets/soccer.jpg'
import ProductCustomize from './components/ProductCustomize/ProductCustomize'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/ProductCustomize' element={<ProductCustomize sportTitle='FOOTBALL' cardImage={shirtBack}/>}/>
        <Route path='/ProductPage' element={<ProductList image={soccerimage} sportTitle='FOOTBALL'/>}/>
        <Route path='/' element={<ProductList image={soccerimage} sportTitle='FOOTBALL'/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App