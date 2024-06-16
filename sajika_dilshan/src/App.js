import React from 'react'
import Header from './Component/Head/Header'
import "./App.css"
import Home from './Component/Hero/Home'
import About from './Component/About/About'
import Service from './Component/Services/Service'
import Protfolio from './Component/Protfolio/Protfolio'

const App = () => {
  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Service/>
    <Protfolio/>


    </>
  )
}

export default App