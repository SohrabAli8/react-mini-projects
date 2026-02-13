import React, { useRef, useState } from 'react'
import ClickHook from './ClickHook'

function ClickOutside() {
        const [showcontent,setShowContet]=useState(false)

    const ref=useRef(null)
    ClickHook(ref,()=>setShowContet(false))
    return (
    <div className=' flex flex-col items-center'>
            {
                showcontent? (<div ref={ref}><h1>
                    This is Custom Hook ShowContent
                    </h1>
                    </div>):<button onClick={()=>setShowContet(true)}> Click To Show</button>
            }
    </div>
  
)
}

export default ClickOutside