import React, { useReducer } from 'react'
const initialstate = 0;
const reducer=(state,action)=>{
  switch(action){
    case "Plus":
      return state+1

    case "Minus":
      return state-1

    default:
      return state
    }

}

const Counter = () => {
  const [count,dispatch]=useReducer(reducer,initialstate)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{dispatch("Plus")}}>+Plus</button>
      <button onClick={()=>{dispatch("Minus")}}>-Minus</button>
    </div>
  )
}

export default Counter
