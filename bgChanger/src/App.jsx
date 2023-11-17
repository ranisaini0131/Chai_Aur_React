import { useState } from "react"


function App() {

  const [colour, setColour]= useState("purple")
  
  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: colour }}>  
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColour('green')}
            className="outline-none px-4 py-1 rounded-full text-white" style={{ backgroundColor: "green" }}>Green
          </button>
          <button
            onClick={() => setColour('lavender')}
            className="outline-none px-4 py-1 rounded-full text-white" style={{ backgroundColor: "lavender" }}>Lavender
          </button>
          <button
            onClick={() => setColour('yellow')}
            className="outline-none px-4 py-1 rounded-full text-white" style={{ backgroundColor: "yellow" }}>yellow
          </button>
          <button
           onClick={() => setColour('blue')}
            className="outline-none px-4 py-1 rounded-full text-white" style={{ backgroundColor: "blue" }}>Blue
          </button>
          <button
            onClick={() => setColour('pink')}
            className="outline-none px-4 py-1 rounded-full text-white" style={{ backgroundColor: "pink" }}>Pink
          </button>
          <button
            onClick={() => setColour('black')}
            className="outline-none px-4 py-1 rounded-full text-white" style={{ backgroundColor: "black" }}>Black
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
