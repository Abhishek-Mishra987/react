import { useState } from 'react'
import './App.css'
import Card from './Components/Card.jsx'  

function App() {

  return (
    <>
      <h1 className='bg-amber-400 text-black'>TailWind Test</h1>
      <Card username = "Abhishek" btnText = "Click Me"/>
      <Card username = "Mishra" btnText = "Press Me"/>
    </>
  )
}

export default App
