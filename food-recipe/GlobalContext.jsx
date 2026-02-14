import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext= createContext(null)
          


    
   
export default function GlobalState({children}){
      const [searchParam,setSearchParam]=useState('')
            const[loading,setLoading]= useState(false)
            const [error,setError]= useState('')
            const[recipeList,setRecipeList]=useState(null)
            const[recipeDetailsData,setRecipeDetailsData]=useState('')
            const [addFavorite,setAddFavorite]=useState([])
            const navigate=useNavigate()

            function handleFavorite (getCurrentItem){
                let cpyItem=[...addFavorite]
                const index=cpyItem.findIndex(item=>item.id===getCurrentItem.id)
                if(index===-1)
                    cpyItem.push(getCurrentItem)
                else 
                    cpyItem.splice(index)
                    
                setAddFavorite(cpyItem)
            }

             async  function handleSubmit (e){
        e.preventDefault()
        try {setLoading(true)
            const  data=await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${searchParam}`)
            const result=await data.json()
            if(result?.data?.recipes)
                setRecipeList(result.data.recipes)
            setLoading(false)
            setSearchParam('')
            navigate('/')
        } catch (error) {
            setError(error.message)
                 setLoading(false)
            setSearchParam('')
        }
      }
    return(
        <GlobalContext.Provider value={{searchParam,setSearchParam,handleSubmit,recipeList,setRecipeList,
            recipeDetailsData,setRecipeDetailsData,handleFavorite,addFavorite
        }}>
            {children}
        </GlobalContext.Provider>
    )
}