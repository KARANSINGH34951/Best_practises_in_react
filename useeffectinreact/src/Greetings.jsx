import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Greetings = () => {
  const [randomNumber,setrandomNumber]=useState(Math.floor(Math.random()*5)+1);

  const [gretting,setgreeting]=useState();

  useEffect(()=>{
    window.localStorage.setItem('random','randomeNumber');
    switch(randomNumber){
      case 1:
        setgreeting("hello")
        break;
      case 2:
        setgreeting("hii")
        break;
      case 3:
        setgreeting("hey")
        break;
      case 4:
        setgreeting("namaste")
        break;
      case 5:
        setgreeting("vanakkam")
        break;
      default:
        setgreeting("hello")
    }
  },[randomNumber])

  // useEffect(()=>{
  //   console.log("every time its going to run");
  // })

  // useEffect(()=>{
  //   console.log("hello only once this will run");
  // },[])


  
  return (
    <div className='greeting-container'>
      <h1>Randome greeting</h1>

      <h2 className='message'>{gretting}</h2>
      {/* {
        randomNumber===1 ?(
          <h2 className='message'>hello</h2>       
        ) : randomNumber===2 ?(
          <h2 className='message'>hii</h2>       
        ) : randomNumber===3 ?(
          <h2 className='message'>namasate</h2>       
        ) : randomNumber===4 ?(
          <h2 className='message'>welcome</h2>       
        ) : randomNumber===5 ?(
          <h2 className='message'>vanakkam</h2>       
        ):(
          <h2 className='message'>Salutations</h2>
        )

      } */}

    </div>
  )
}

export default Greetings
