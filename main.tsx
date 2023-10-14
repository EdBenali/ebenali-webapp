import React from 'react'
import ReactDOM from 'react-dom/client'

import './src/assets/universal.css'

import Footer from './src/components/Footer'
import Header from './src/components/Header'
import Home from './src/components/Home' 

import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Home/>}/>
          <Route path='/about' element={<Home/>}/>
        </Routes> 
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
