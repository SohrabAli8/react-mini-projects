import React, { useState } from 'react'

function RandomColor() {
    const [color,setColor]=useState('#FFFFFF')
    const [colorType,setColorType]= useState('hex')

        const hexColorGenerate = ()=>{
            const value=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
            let hexColor='#'
            for(let i=0; i<6; i++)
            {
                hexColor+=value[Math.floor(Math.random()*(value.length))]
            }
            setColor(hexColor)
        }

        const rgbColorGenerate= ()=>{
            const r=Math.floor(Math.random()*256)
            const g= Math.floor(Math.random()*256)
            const b= Math.floor(Math.random()*256)
            setColor(`rgb(${r},${g},${b})`)
        }

  return (
    <div 
    style={{background:color}}
className='flex  flex-col justify-center  items-center min-h-screen transition-colors duration-500 '
    >
<div className='text-4xl font-extralight m-16 justify-center'>
        RandomColor : {`${color}`}
            </div>

        
            <button
            onClick={()=>{setColorType('hex'),
                hexColorGenerate()
            }}
            className='cursor-pointer bg-gray-400 rounded-2xl p-3 mb-6 hover:bg-cyan-200 transition duration-500'>
                Generate Hex Colour
            </button>
            <button
            onClick={()=>{{setColorType('rgb')}
                rgbColorGenerate()
            }}
             className='bg-gray-400 rounded-2xl p-3 cursor-pointer hover:bg-cyan-200 transition duration-300'>
            Generate Rgb colour
            </button>
            </div>
  )
}

export default RandomColor