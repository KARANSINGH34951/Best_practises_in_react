import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Moviescomponents from './Moviescomponents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Moviescomponents/>
    </>
  )
}

export default App
