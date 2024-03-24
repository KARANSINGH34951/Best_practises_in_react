import React, { useState } from 'react'
import Githubuser from './Githubuser'

const Finduser = () => {
  const [username,setusername]= useState("");

  return (
    <div className='find-user'>
      <h1>SEARCH USERS</h1>

      <form action="">
        <div className="form-group">
          <label htmlFor='username'></label>
          <input placeholder='Enter the search' type='text' onChange={(event)=>setusername(event.target.value)}/>
        </div>
      </form>

      <div className="result">
      { username ? 
        <Githubuser username={username} /> :
        <p>please Initiate a search</p>
      }
      
      </div>
    </div>
  )
}

export default Finduser
