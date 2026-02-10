import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

function Star({noOfStar=5}) {
          const [rating,setRating]=useState(0)
          const [hover,setHover]= useState(0)

          function handleClick(index)
          {
            
            setRating(index)
          }
            function handleMouseMove(index)
          {
            
            setHover(index)
          }
          function handleMouseLeave(index)
          {
            
            setHover(0)
          }
  return (
    <div className='flex  gap-2 justify-center'>
        {
            [...Array(noOfStar)].map((_,index)=>    
                <FaStar  size={40}  key={index}
                onClick={()=>handleClick(index+1)}
                  onMouseMove={()=>handleMouseMove(index+1)}
                  onMouseLeave={()=>handleMouseLeave(index+1)}
              className={index<(hover|| rating)?'text-yellow-400':'text-black'}
              />
           
            )
        }
      
    </div>
  )
}

export default Star