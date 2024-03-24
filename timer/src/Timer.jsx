import React, { useEffect, useState } from 'react';

const Timer=()=>{

  const [time,settime]=useState(0);

  useEffect(()=>{
    const timer  = setInterval(() => settime(time+1), 1000);
    console.log("adding new intervel");

    return function(){
      clearInterval(timer)
      console.log("clear old intervel");
    }
},[time])

  return (
    <>
      <h1>TIMER</h1>
      <p>current time is {time}</p>
    </>
  )
}

export default Timer