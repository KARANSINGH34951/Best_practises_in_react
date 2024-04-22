import { useState } from 'react'

import './App.css'
import Axiosfile from './Axiosfile'
import Axiospost from './Axiospost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Axiospost/>
    {/* <Axiosfile /> */}
    </>
  )
}

export default App
