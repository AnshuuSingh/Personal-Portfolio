import React, { useEffect, useState } from 'react'

function Github() {
    const[data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/AnshuuSingh')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data);
        })
    }, [])
  return (
    <div className="box w-full min-h-screen bg-gray-900">
      <div className='text-center p-4 text-white text-3xl'>Github followers: {data.followers}</div>
    </div>
  )
}

export default Github
