import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Childa from './components/Childa'

function App() {
  const [count, setCount] = useState(0)
  const data="karan singh"

  return (
    <>
      <Childa data={data} />
    </>
  )
}

export default App
