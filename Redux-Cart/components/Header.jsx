import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav className='grid grid-cols-2 items-center mt-10 max-w-6xl mx-auto'>
        
        <div>
          <Link to='/'>
            <h1 className='text-red-900 text-4xl'>
              React Redux Cart
            </h1>
          </Link>
        </div>

        <ul className='text-xl font-bold flex justify-end space-x-10'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/cart'>Cart</Link>
          </li>
        </ul>

      </nav>
    </div>
  )
}

export default Header
