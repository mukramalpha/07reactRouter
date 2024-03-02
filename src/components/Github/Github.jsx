import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {

    //faster way to load api data
    const data=useLoaderData()

    //slower way to load api data
   // const [data,setData]=useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/mukramalpha')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)

    //     })
    // },[])
  return (
    <div className='text-3xl text-center bg-gray-400 m-4 p-4 '>
        Github followers:{data.followers}
        <img src={data.avatar_url} alt='github pic' width={300}/>
    </div>
  )
}

export default Github

//faster way to load api data
export const githubInfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/mukramalpha')
    return response.json()
}