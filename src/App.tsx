import './assets/App.css'
import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'
import Home from './Home.tsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Home/>}/>
          <Route path='/about' element={<Home/>}/>
        </Routes> 
      <Footer />
    </Router>
  )
}

export default App
