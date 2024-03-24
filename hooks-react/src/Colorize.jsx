import React, { useState } from 'react'

const Colorize = () => {
 const [color,setcolor]=useState("#6d0e0e");

  const random1=()=>{
    const randome=`#${Math.floor(Math.random() * 26767215)}`;
    console.log("changing the color",random1);
    return randome
  }

  const changecolor=()=>{
    
    setcolor(random1)
  }

  return (
    <div className='colorizer'>
        <h1>Colorizer</h1>
        <div className='box' style={{backgroundColor:color}}>         {color}
        </div>
      
        <button onClick={changecolor}>Change Color</button>

    </div>
  )
}

export default Colorize
