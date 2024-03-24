import React, { useEffect, useState } from 'react'

const Githubuser = ({username}) => {

  // https://api.github.com/users/KARANSINGH34951

  const  [user,setuser]=useState(null);
  const  [error,seterror]=useState(null);
  const  [loading,setloading]=useState(false);

  useEffect(()=>{

    const fetchdata=async ()=>{
      setloading(true);
      try{
        const response = await fetch(`https://api.github.com/users/${username}`)
        const responsedata = await response.json();
        setuser(responsedata);
        setloading(false)
        console.log(responsedata);
      }
        catch(error){
          seterror(error);
          setloading(false);
        }
    }
    
    fetchdata()
  },[username])


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
