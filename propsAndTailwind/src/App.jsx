import { useState } from 'react'
import Card from './components/card.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj={}

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind CSS</h1>
      <Card username="chaiAurCode" btnText="click me" />
      <Card username="RANI SAINI" btnText="visit me"/>
    </>
  )
}

export default App
