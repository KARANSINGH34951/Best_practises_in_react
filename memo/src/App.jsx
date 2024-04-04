import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './components/Test.jsx'


function App() {
  const [count, setCount] = useState(0)
  const [data, setdata] = useState(1)

  function increament(){
    setdata(2)
    setCount(count+1)
  }

 

  const [add,setadd] = useState(0);
  const [sub,setsub] = useState(100);
  

  const mutiliplication = useMemo(function mutipl(){
    console.log("look at console");
    return add*10;
  },[add])

  return (
    // <div className='app'>
    //   <h3>app components</h3>
    //     <Test data={data} />
    //     <button onClick={()=>increament(count+1)}>+{count} count</button>
    // </div>

   <div>
    {mutiliplication}
     <button onClick={()=>{setadd(add+1)}}>add</button>
     <span>{add}</span>
     <button onClick={()=>{setsub(sub-1)}}>sub</button>
     <span>{sub}</span>
   </div>
  )
}

export default App
