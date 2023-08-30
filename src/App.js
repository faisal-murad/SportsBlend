import React from 'react'
import './App.css'
import Mainpage from './components/Mainpage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainpage/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App