import React, { useContext } from 'react'
import { GlobalContext } from '../../GlobalContext'
import RecipeList from '../../RecipeItem/RecipeList'

function Home() {
 const {recipeList} = useContext(GlobalContext)
 console.log(recipeList);
 
  return (
    <div>
      <div className='grid grid-cols-4  bg-amber-100'>
        {
          recipeList && recipeList.length>0 ?recipeList.map((item)=>(
            <div className='bg-white rounded-xl shadow-2xl shadow-gray-500 m-4'>
            <RecipeList key={item.id} item={item}/>
            </div>
          )):null
        }
      </div>
    </div>
  )
}

export default Home