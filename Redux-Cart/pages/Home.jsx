import React, { useEffect, useState } from 'react'
import { Circles } from 'react-loader-spinner'
import ProductTile from './ProductTile'
function Home() {
        const [products,setProducts]= useState([])
        const [loading,setLoading]=useState(false)
        const [error,setError] = useState('')
        async function fetchData(){
            try {
                setLoading(true)
                const data=await fetch(`https://fakestoreapi.com/products`)
                const result=await data.json()

                if(result) setProducts(result)
                setLoading(false)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            }
        }

        useEffect(()=>{
            fetchData()
        },[])
  return (
    <div>
        {
            loading?(<div className='min-h-screen w-full justify-center items-center flex'>
                <Circles
        height={'120'}
        width={'120'}
        color='red'           />
            </div>):
            <div className=' grid grid-cols-4 mt-10  space-x-5 max-w-6xl mx-auto'>
                {
                    products && products.length>0?(
                        products.map(product=><ProductTile key ={product.id} product={product}/>)
                    ):null
                }
            </div>
        }

        </div>
  )
}

export default Home