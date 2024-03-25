import React, { useState } from 'react'
import Githubuser from './Githubuser'


const Finduser = () => {
  const [username,setusername]= useState("");

  return (
    <div className='find-user'>
      <div className="user-input   userstyle1">
        <h1>SEARCH USERS</h1>

        <form action="">
          <div className="form-group">
            <label htmlFor='username'></label>
            <input placeholder='Enter the search' type='text' onChange={(event)=>setusername(event.target.value)}/>
          </div>
        </form>
      </div>

      <div className="result userstyle">
      { username ? 
        <Githubuser username={username} /> :
        <p>please Initiate a search</p>
      }
      
      </div>
    </div>
  )
}

export default Finduser
