import React, { useState } from 'react'

function Theme() {

    const [color,setColor]= useState('#FFFFFF')
    const changeColor=()=>{
        if(color==='#3E3E42')
        setColor('#FFFFFF')
         else setColor('#3E3E42')  
    }
  return (
    <div style={{backgroundColor:color}} className='flex  w-full min-h-screen  
    flex-col justify-center items-center
    transition-colors duration-1000 ease-in-out'>
       <h1 className='text-5xl mb-12 text-white'> Theme changer !</h1>
    <button onClick={()=>changeColor()} className='p-3 bg-black rounded-2xl hover:bg-gray-50 transition duration-300 text-white font-bold  cursor-pointer'>
        Change Theme</button>
    </div>
  )
}

export default Theme