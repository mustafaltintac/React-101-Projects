import { useState } from 'react'
import './App.css'
import AppBar from '@mui/material/AppBar';
import Cart from './Cart'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <AppBar sx={{height:50,alignItems:"center", justifyContent:'center', fontSize:30  }}> SPORLAR</AppBar>
    <Cart  />
    </div>
  )
}

export default App

