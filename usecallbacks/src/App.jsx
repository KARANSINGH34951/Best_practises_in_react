import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './components/Child'


function App() {
  const [add, setadd] = useState(0)
  const [count, setcount] = useState(0)

    // const  learning =()=>{
    //     // helo inside a the func
    // }
    const learning= useCallback(()=>{
      // using use call back
    },[count])


  return (
    <>
      <div>
        <h1>learning usecallback</h1>
        <Child learning={learning} count={count}/>
        <h1>{add}</h1>
        <h1>{count}</h1>
        <button onClick={()=>setadd(add+1)}>addition</button>
        <button onClick={()=>setcount(count+2)}>count</button>
      </div> 
    </>
  )
}


export default App
