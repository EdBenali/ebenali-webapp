import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/universal.css'
import './assets/App.css'

import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'
import Home from './Home.tsx'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Home/>}/>
          <Route path='/about' element={<Home/>}/>
        </Routes> 
      <Footer />
    </Router>
  </React.StrictMode>,
)
