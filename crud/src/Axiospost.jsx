import React, { useState } from 'react'
import axios from 'axios'

const Axiospost = () => {
  const data ={
    fname:"",
    lname:""
  }
  
  const [inputdata,setinputata]=useState(data)

  const handledata=(e)=>{
    setinputata({...inputdata,[e.target.name]:e.target.value})
  }

  const handlesubmit=(e)=>{
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/users",inputdata)
    .then((res)=>{
      console.log(res);
    })
  }

  const handleupdate=(e)=>{
    e.preventDefault();
    axios.put("https://jsonplaceholder.typicode.com/users/1",inputdata)
    .then((res)=>{
      console.log(res);
    })
  }

  const handledelete=(e)=>{
    e.preventDefault();
    axios.delete("https://jsonplaceholder.typicode.com/users/1")
    .then((res)=>{
      console.log(res);
    })
  }

  return (
    <div>
      <label>First name</label>
      <input type='text' name='fname' value={inputdata.fname} onChange={handledata}></input><br/>
      <label>Last name</label>
      <input type='text' name='lname' value={inputdata.lname} onChange={handledata}></input><br/>

      <button onClick={handlesubmit}>Submit</button>
      <button onClick={handleupdate}>Update</button>
      <button onClick={handledelete}>Delete</button>
      
    </div>
  )
}

export default Axiospost
