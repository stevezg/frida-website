import React from 'react'
import logo from './logo.svg'
import './App.css'

import Menu from './Components/Menu'
import Location from './Components/Location'
import PhoneNumber from './Components/PhoneNumber'
import Hours from './Components/Hours'
import Header from './Components/Header'
import NavbarComponent from './Components/NavbarComponent'
import About from './Components/About'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Header />
      <Menu />
      <Hours />
      <Location />
      <PhoneNumber />

      {/* <About /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App
