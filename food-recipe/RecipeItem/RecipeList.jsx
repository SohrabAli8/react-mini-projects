import React from 'react'
import { Link } from 'react-router-dom'

function RecipeList({item}) {
  return (
    <div>
        
        <div className='rounded-xl cursor-pointer transition-all duration-300
        hover:shadow-2xl hover:-translate-y-2 p-3  bg-gray-200'>
            <div className='overflow-hidden rounded-2xl'>
        <img src={item.image_url} alt={item.image_url} className='h-60 block 
        hover:scale-105  transition-transform duration-300
        w-full object-cover rounded-2xl' />
        </div>
         <span className='italic
         block mt-0.5   rounded-2xl h-14 line-clamp-2 
          text-amber-900'>{item?.publisher}</span>
        <span className='font-extrabold
         block mt-0.5 text-center rounded-2xl h-14 line-clamp-2  text-black'>{item?.title.replace("&amp;", "&")}</span>
         
         <Link className=' mx-auto block mt-4 bg-black
         transition duration-300 hover:bg-gray-800 hover:scale-105 text-white px-6  rounded-xl 
         cursor-pointer py-2 uppercase'
         to={`/recipe-item/${item?.id}`}
         > Recipe Details</Link>
         
                     
        
        </div>
        </div>
  )
}

export default RecipeList