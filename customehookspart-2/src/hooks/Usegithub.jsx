import React from 'react'
import { useState , useEffect} from 'react';

const Usegithub = (username) => {

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


  return  {user, loading,error};
  
}

export default Usegithub
