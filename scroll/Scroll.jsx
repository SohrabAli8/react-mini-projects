import React, { useEffect, useRef, useState } from 'react'
``
function Scroll() {
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState('')
    const [product,setProducts]=useState([])
    const fetchData=async ()=>{
        try {setLoading(true)
            const result=await fetch('https://dummyjson.com/products?limit=100')
            const data= await result.json()
            if(data && data.products && data.products.length)
                setProducts(data)
            setLoading(false)
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }


    }
        const handleScrollTop=()=>{
           window.scrollTo( {
                top:8,
                left:0,
                behavior:'smooth'
            })
        }

                useEffect(()=>{
            fetchData()
        },[])

        const bottomRef=useRef(null)

        const handleScrollToBottom = ()=>{
            bottomRef.current.scrollIntoView({
                behavior:'smooth'
            })
        }

        if(error) return <div>error occured ! Please Try Again</div>
    if(loading) return <div>Loading Please Wait..........!</div>
  return (
    <div className=' flex flex-col items-center mt-8 text-center space-y-4'>
        <h1 className='text-3xl'>Scroll To Top and Bottom Feature......!</h1>
        <h3 className='text-lg'>This is Top Section</h3>
        <button  onClick={handleScrollToBottom} className='p-2 bg-gray-400'>Scroll To Bottom</button>
        <ul>
        {
            product && product.products && product.products.length>0?(
                product.products.map(item=><li key={item.id}>{item.title}</li>)
            ):null
        }
         {
            product && product.products && product.products.length>0?(
                product.products.map(item=><li key={item.id}>{item.title}</li>)
            ):null
        }
        </ul>
        <h3 className='text-lg'>This is Bottom Section</h3>
        <div ref={bottomRef}></div>
        <button onClick={handleScrollTop} className='bg-gray-400 p-2 mb-8'>Scroll To Top</button>
        
        </div>
  )
}

export default Scroll