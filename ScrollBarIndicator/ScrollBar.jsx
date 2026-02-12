import React, { useEffect, useState } from 'react'

function ScrollBar() {

        const [products,setProducts] = useState([])
        const [error, setError]= useState('')
        const [loading,setLoading]= useState(true)
        const [percent,setPercent]= useState(0)

const fetchData=async ()=>{
        try {
                setLoading(true)
                const result=await fetch('https://dummyjson.com/products')
                const data=await result.json()
                if(data && data.products && data.products.length>0)
                {
                    setProducts(data.products)
                    setLoading(false)
                }
            
        } catch (error) {
            setError(error.message)
            setLoading(false)
            
        }
    }
    const handleScrollPercent = ()=>{
        const height=document.documentElement.scrollHeight-document.documentElement.clientHeight
        if(height>0)
        setPercent((document.documentElement.scrollTop/height)*100)
    }

    useEffect(()=>{
        fetchData()
    },[])

    useEffect(()=>{
        window.addEventListener('scroll',handleScrollPercent)
    return  ()=>{window.removeEventListener('scroll',handleScrollPercent)
    }
    
},
    [])

  return (

    <div className='flex flex-col items-center'>
        <div className='mt-10 bg-green-700 text-black w-full flex flex-col items-center underline text-4xl p-8'>
            Custom ScrollBar 
        </div>
       
        <div 
        
              className='h-4 rounded-xl backdrop-blur-md
               bg-yellow-400/50 fixed left-0 top-0 transition-all duration-150'
  
        style={{width:`${percent}%`}}>

      </div>  
        {products.map((product)=>
        <div key={product.id}>
           <img src={product.thumbnail} alt={product.thumbnail} />
           <p> {product.title}
            </p>
            </div>
        )}
        
        
        </div>
  )
    
}

export default ScrollBar