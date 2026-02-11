import React, { useEffect, useState } from 'react'
                                                                                                       
function LoadBtn() {
    const [loading,setLoading]=useState(false)
    const [products,setProducts]= useState([])
    const [count,setCount] = useState(0)
     const [error,setError] = useState('')
     const [disableBtn,setDisableBtn]= useState(false)
    const fetchData = async ()=>{
        try {
            setLoading(true)
            const result=await fetch(`https://dummyjson.com/products?limit=20&skip=${
                count===0 ?0:count*20
            }`)
            const data= await result.json()
            console.log(data);
            if(data && data.products && data.products.length){
                setProducts((product)=>[...product,...data.products])
                setLoading(false)
            }
                
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    },[count])
        let keyy=0;
    useEffect(()=>{
        if(products && products.length===194) setDisableBtn(true)
    },[products])

    if(loading) return <div>Loading.... Please Wait!</div>
  return (
    <div className='min-h-screen p-6 ' >
          

        <div className='grid shadow-2xl sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2'>
            {
                products && products.length? products.map((item)=>
                <div key={keyy++}
                 className='p-16 flex bg-green-100 m-6' >
                    <div>
                        <img src={item.thumbnail} alt={item.title} className='w-32 h-40 object-cover mx-auto' />
                        <p className='text-xl text-center'>{item.title}</p>
                    </div>
                </div>):null
            }
        </div>

          <div className='flex justify-center' >
        <button onClick={()=>(setCount(prev=>prev+1))}
            className='px-6 py-2 bg-cyan-400 text-white rounded-2xl
            mb-8 hover:bg-amber-200 mt-20 transtion duration-200'
            disabled={disableBtn}
            >
       {disableBtn?<p>New Product Soon..</p>: <p>Load More....</p>}
        </button>
</div>
        </div>
  )
}

export default LoadBtn