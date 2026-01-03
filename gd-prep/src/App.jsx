import React from 'react'
import Nav from './components/Nav.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
// import About from './components/About.jsx'
// import Contact from './components/Contact.jsx'
// import './App.css'
import Footer from './components/Footer.jsx'
import { BrowserRouter } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>  
  )
}

export default App
