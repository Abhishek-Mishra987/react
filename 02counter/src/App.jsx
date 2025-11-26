import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);  

  const addValue = () => {
    setCounter(prev => Math.min(prev + 1, 20)); 
  }

  const subtractValue = () => {
    setCounter(prev => Math.max(prev - 1, 0));  
  }

  return (
    <>
    <h1>Abhi and Code</h1>
    <h3>Counter value: {counter}</h3>
    <button
    onClick={addValue}
    >Add Value {counter}</button>
    <br />
    <br />
    <button
    onClick={subtractValue}
    >Subract Value {counter}</button>
    </>
  )
}

export default App
