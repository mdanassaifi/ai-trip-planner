import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1> Trip Planner</h1>
        <p>This is a Trip Planner App</p>
        <Button>Click me</Button>
        
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </>
  )
}

export default App
