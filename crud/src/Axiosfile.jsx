
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Axiosfile = () => {
  const [inpdata,setinpdata]=useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      console.log(res);
      setinpdata(res.data)

    }).catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <div>
       {
        inpdata.map((data)=>{
            return(
              <div>{data.name}</div>
            )
        })
       }
    </div>
  )
}

export default Axiosfile
