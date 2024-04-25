import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Newclass from './Newclass'

// ----This is a nemed export---
import { Navbar } from './component/Navbar' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>This is my first react class</h1>
      <Newclass /> */}
      <Navbar/>
    </>
  )
}

export default App
