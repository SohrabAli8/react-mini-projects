import React, { useState } from 'react'
import Menulist from './Menulist'

function Menu({content}) {

      const [expand,setExpand]=useState(false)

      const handleClick=()=>{
        setExpand(!expand)
      }

        const hasChildren=content?.children?.length>0 
  return (
    <li>
      <div className='flex items-center justify-between'>
      <p>{content.label}</p>
      {
       content && content.children && content.children.length>0? 
        
        <button onClick={()=>handleClick()} >
          {expand?'-':'+'}</button>:null
      }
    
      </div>
      {expand && content.children && content.children.length>0 && 
      (<Menulist  list={content.children}/>)
      
    }
    </li>
  )
}

export default Menu

