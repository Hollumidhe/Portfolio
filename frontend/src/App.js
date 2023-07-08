import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

import { Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Portfolio from './components/Pages/Portfolio'
import Contact from './components/Pages/Contact'
function App() {
  return (
    <>
      <Header />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}
export default App