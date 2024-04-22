import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name,setname]=useState({firstname:"karan",lastname:"singh"})

  function update(){
    // setname({firstname:"karan change"})
    setname({...name,firstname:"karan change"})
  }

  return (
    <>
     <h1>first name is {name.firstname} and last name is {name.lastname}</h1>
     <button onClick={update}>update</button>
    </>
  )
}

export default App
