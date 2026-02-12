  import React from 'react'
  import Menu from './Menu'

  function Menulist({list=[]}) {
    return (
    <ul className="w-64 min-h-screen bg-blue-400 shadow-xl border-r border-gray-200 p-4 space-y-2">
          {
              list && list.length?
              list.map((listItem)=><div className='hover:shadow-xs ' key={listItem.id}>
                
                <Menu content={listItem} />
                </div>) :null
          }
      </ul>
    )
  }

  export default Menulist