import React from 'react'

function Card({user}) {
    const {followers,avatar_url,login,created_at,public_repos} =user
    const data= new Date(created_at)
  return (
    <div className='flex flex-col justify-between items-center w-xl mt-4 min-h-[500px] rounded-2xl p-6 pt-1  bg-white'>
        <div className='w-full'>
            <img src={avatar_url} className='h-60 rounded-3xl border-black mx-auto' alt={avatar_url} />
      <a href={`https://github.com/${login}`} 

      className='text-4xl text-center mt-4 block hover:underline'>
      {login}
      </a>
        <h1 className='text-2xl m-4 text-center'>{`Follower: ${followers}`}</h1>
        </div>
        <h1 className='text-xl  m-2 '>{`CreateAt: ${data.toDateString()}`}</h1>
        <h1 className='text-xl  m-2 '>{`Total Public Repo: ${public_repos}`}</h1>
        

        
    </div>
  )
}

export default Card