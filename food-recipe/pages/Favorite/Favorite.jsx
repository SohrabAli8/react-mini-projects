import React, { useContext } from 'react'
import { GlobalContext } from '../../GlobalContext'
import RecipeList from '../../RecipeItem/RecipeList'

function Favorite() {

  const {addFavorite}=useContext(GlobalContext)
  return (
    <div>
<div className='flex flex-wrap justify-center bg-amber-100'>
        {
          addFavorite && addFavorite.length>0 ?addFavorite.map((item)=>(
            <div className='bg-white rounded-xl shadow-2xl shadow-gray-500 m-4'>
            <RecipeList key={item.id} item={item}/>
            </div>
          )):<div>Nothing to Show Please Add Something</div>
        }
      </div>
    </div>
  )
}

export default Favorite

