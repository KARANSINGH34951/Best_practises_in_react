import React, { useEffect, useState } from 'react'
import Usegithub from './hooks/Usegithub';

const Githubuser = ({username}) => {
  const {user,loading,error}=Usegithub(username)
  // https://api.github.com/users/KARANSINGH34951

  return (
    <div className='username-container'>
      
      { loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}

      {
        user && (
          <ul className='details'>
            <li>
              <img src={user.avatar_url} alt={user.login}/>
            </li>
            <li>
                <strong>Name:</strong>{user.name}
            </li>
            <li>
                <strong>Bio:</strong>{user.bio ? user.bio: "NA"}
            </li>
            <li>
                <strong>Location:</strong>{user.location ? user.location: "NA"}
            </li>
            <li>
                <strong>Blog or site :</strong>{user.blog ? user.blog: "NA"}
            </li>
            
          </ul>
        )
      }

      
      
      
    </div>
  )
}

export default Githubuser
