import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homepage from './pages/Homepage/Homepage'
import Filter from './components/Filter/Filter'





function App() {

  return (
      <div>
        <Header />
        <Filter />
        <Homepage />
        <Footer />
      </div>
  )
}

export default App
