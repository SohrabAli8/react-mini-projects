import React, { useContext, useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'
import { GlobalContext } from '../../GlobalContext'

function FoodRecipe() {
  const {id}=useParams()
    const {recipeDetailsData,setRecipeDetailsData,handleFavorite,addFavorite} =useContext(GlobalContext)

    useEffect(()=>{
        async function GetRecipe(){
    const data=await fetch(`https://forkify-api.jonas.io/api/v2/recipes/${id}`)
          const result=await data.json()
       setRecipeDetailsData(result.data.recipe)
           console.log(result);

        }
        
        GetRecipe()
    },[id])

    if(!recipeDetailsData) return <div className='text-center text-xl '>Loading please Wait........</div>
  return (
    <div className='grid grid-cols-2 min-h-screen'>
      <div>
        <img src={recipeDetailsData.image_url} alt={recipeDetailsData.title}
        className='rounded-2xl w-full h-[500px] object-cover' />
         <h1 className="text-2xl  text-center font-bold mt-2 mb-8">
        {recipeDetailsData.title.replace('&amp;','&')}
      </h1>
      </div>
      <div className='mx-20'>     

      <button className='text-white bg-black p-2 mb-12 cursor-pointer'
      onClick={()=>handleFavorite(recipeDetailsData)}>
        {
        addFavorite.findIndex(item=>item.id===recipeDetailsData?.id)!==-1?'Remove from Favorite':'Save as Favorite'
        }
      </button>
      <div>
        <span className='text-2xl font-extrabold '>Ingredients:</span>
        <ul className='mt-8 text-xl list-disc list-inside marker:text-black '>
        {
            recipeDetailsData?.ingredients?.map((item,index)=><li key={index}>
              {item.quantity} {item.unit} — {item.description}
              </li>)
          
        }
        </ul>

        
      </div>
      <div className='mt-12 mb-10'>
      <Link to="/"
          className=" px-6 py-3 bg-black text-white text-center"
       >Back Home</Link>
</div>
</div>
    </div>
  )
}

export default FoodRecipe