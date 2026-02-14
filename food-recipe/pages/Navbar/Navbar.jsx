import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {GlobalContext} from '../../GlobalContext'
function Navbar() {


  const {searchParam,setSearchParam,handleSubmit,recipeList}= useContext(GlobalContext)

 
  
  return (
    <nav className='grid grid-cols-3 items-center  justify-center container mx-auto ' >
      <h2 > <NavLink to={'/'}
        className='text-amber-600 text-2xl hover:text-black duration-300 mx-12 m-20'
        >
      FoodRecipe
        </NavLink></h2>
      <form onSubmit={handleSubmit}>
    <input type="text"
    placeholder='Enter items.....'
    name='search'
    onChange={(e)=>setSearchParam(e.target.value)}
    value={searchParam}
    className='bg-white/60  p-4 px-8
    focus:bg-green-300 duration-300 cursor-pointer  m-14 mx-40 rounded-full shadow-lg  shadow-red-50 outline-none' />
      </form>
      <ul className='mx-50 flex space-x-20 '>
      <li>
        <NavLink to={'/'}
        className='text-amber-600 text-xl hover:text-black duration-300'
        >
      Home
        </NavLink>
      </li>
      <li>
        <NavLink to={'/favorite'}
        className='text-amber-600 text-xl hover:text-black duration-300'
        >Favorite</NavLink>
      </li>



      </ul>
    </nav>
  )
}

export default Navbar