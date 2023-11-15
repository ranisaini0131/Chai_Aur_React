import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 13, after using useState no need of thos becuase it can't changed the values on UI

  const [counter, setCounter] = useState(0);
  
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      // setCounter(counter => counter + 1);// counter ki previous state me +1 krre h.
      // setCounter(counter => counter + 1);
      // setCounter(counter => counter + 1);
      // setCounter(counter => counter + 1);
    }

  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }  }
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>counter:{counter}</h2>
      
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
