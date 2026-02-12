import React from 'react'
import Menu from './Menu'
import Menulist from './Menulist'

function Treeview({menu=[]}) {
  return (
    <div>
       <Menulist list={menu}/> 
    </div>
  )
}

export default Treeview