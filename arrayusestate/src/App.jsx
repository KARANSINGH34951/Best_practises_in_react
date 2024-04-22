import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState([])

  function additems(){
    setCount([...count,{id:count.length,value:Math.floor(Math.random()*10)}])
    // value:"pen"}])
  }

  return (
    <>
      <ol>
          {count.map(count=>(
            <li key={count.id}>{count.value}</li>
          ))}
      </ol>
      <button onClick={additems}>add item</button>
    </>
  )
}

export default App
