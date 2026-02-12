import React, { useEffect, useState } from 'react'
import Card from './Card'


function GitAccountFinder() {

        const [username,setUsername]=useState('hitesh')
        const [loading,setLoading] =useState(false)
        const [user,setUser]= useState('')
        const [error,setError]= useState('')

        const fetchUser=async ()=>{
            try {
                setLoading(true)
                const data=await fetch(`https://api.github.com/users/${username}`)
                const userData=await data.json()
                if(userData){
                    setUser(userData)
                }
                setLoading(false)
                setUsername('')
            } catch (error) {
                setError(error.message)
                setLoading(false)
                
            }
        }

        const handleSubmit = ()=>{
                fetchUser()
        }


        useEffect(()=>{
            fetchUser()
        },[])

  return (
    <div className="bg-gray-500 min-h-screen w-full flex flex-col">
        
        <div className=' flex  gap-4 place-content-center mt-16'>
            <input
            name='user-name'
        placeholder='Search GitHub User...'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        className='outline-none bg-white rounded px-2 focus:bg-green-200 transition duration-200'
        />
        <button
        onClick={handleSubmit}
        className='p-2 rounded-xl bg-gray-600/50 cursor-pointer hover:bg-gray-50'>Generate User</button>
            </div>
            <div className='flex justify-center p-6'>
        <Card user={user}/>
        </div>
    </div>



  )
}

export default GitAccountFinder