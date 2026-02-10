import React, { useState } from 'react'
import data from '../../data'
    
function Acodian() {
    const [single,setSingle]= useState(null)
    const [multi,setMulti]= useState([])
    const [enableMulti,setEnableMulti]=useState(false)

    const handleSingleSelection=(selectedId)=> {
        setSingle(selectedId===single?null:selectedId)
        
    }
    const handleMultiSelection= (selectId)=>{
        const copyMulti=[...multi]
        
        const elementPresent=copyMulti.indexOf(selectId)
        if(elementPresent==-1) copyMulti.push(selectId)
            else  
            copyMulti.splice(elementPresent,1)

        console.log(copyMulti);
        
        setMulti(copyMulti)
    }
    

  return (
    <div className='flex flex-col justify-center bg-red-400 w-full min-h-screen'>
        <div className=' flex text-5xl justify-center font-semibold text-amber-800 mb-20'>
            Acodian Selector
        </div>
        <div className='justify-center flex mb-6'>
             
            <button onClick={()=>(setEnableMulti(!enableMulti))} 
            
            className=' bg-white rounded-2xl p-2
            tansition duration-300 hover:bg-blue-300 cursor-pointer '>
            Enable Multi Selection
        </button></div>
       
        <div >
        {data && data.length>0?<div className='items-center'>

            { data.map((dataItem)=>( 
                <div key={dataItem.id} className='flex flex-col m-4 
                items-center mx-auto bg-gray-200 rounded-2xl w-full lg:w-1/3 '>
                    {dataItem.question}
            <span onClick={()=>enableMulti?handleMultiSelection(dataItem.id):handleSingleSelection(dataItem.id) } className='cursor-pointer'>
                
                {
                enableMulti?((multi.includes(dataItem.id))?'-':'+'):
                dataItem.id===single ?'-':'+'
                }
                </span>
                    {(dataItem.id===single|| multi.indexOf(dataItem.id)!==-1 ) &&<p className='m-4'> {dataItem.answer}</p>}
            </div>
        
        ))}
           
        </div>
        
        :<div>Nothing to show</div>
        }
        </div>
    </div>
  )
}

export default Acodian