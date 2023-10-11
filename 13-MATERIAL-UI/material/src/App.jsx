import { useState } from 'react'

import './App.css'
import CheckBox from './components/CheckBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CheckBox/>
    </>
  )
}

export default App
