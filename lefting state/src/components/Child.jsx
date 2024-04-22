import React, { useState } from 'react'

const Child = (props) => {
  const [name,setname]=useState()

  function handlesubmit(event){
    event.preventDefault()
    props.getdata(name)

  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" value={name} onChange={(e)=>{
          setname(e.target.value)
        }} />
        <button>submit</button>
      </form>
    </div>
  )
}

export default Child
