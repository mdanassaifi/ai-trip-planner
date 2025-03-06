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
        <Button>Click me</Button>
        <h2 className='m-0 mt-0 '> cow is {count}</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </>
  )
}

export default App
