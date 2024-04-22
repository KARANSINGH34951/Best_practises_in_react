import { useState } from 'react'

import './App.css'
import Child from './components/Child'

function App() {
  const [count, setCount] = useState(0)
  // const data="karan singh"

  function getdata(data){

    // console.log(data);
    console.log(data);
  }

  return (
    <>
      <Child getdata={getdata}/>
    </>
  )
}

export default App
