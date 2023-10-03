import { useState } from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import Menu from "./components/Menu"
import AboutUs from "./components/AboutUs"
import Contact from "./components/Contact"
import WrongPage from './components/WrongPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/menu' element={<Menu/>} />
        <Route path='/aboutUs' element={<AboutUs/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path="*" element={<WrongPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
