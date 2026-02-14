import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem } from '../store/Cart-slice'
function Cart() {
    const cart = useSelector(state => state.cart)
  const totalCart = cart.reduce((acc, curr) => acc + curr.price, 0)

 
    
    const dispatch=useDispatch()
  return (
    <div className='mt-8 p-5'>
        
          <div className='w-full mt-6 text-center text-xl font-bold'>
            Sub Total: ${totalCart.toFixed(2)}
          </div>
        <div className='flex flex-wrap gap-6' >
        {
            cart&& cart.length>0?
            cart.map((cartItem)=>
            <div key={cartItem.id} className='w-48 bg-amber-200 m-8 rounded-xl p-4'>
               
                <img src={cartItem?.image} alt={cartItem?.title} className='h-24 mx-auto object-contain' />
                <p className='line-clamp-1  font-semibold'>{cartItem?.title}</p>
                <p className='mx-auto font-semibold text-green-600'>${cartItem?.price}</p>
                <p><button onClick={()=>dispatch(removeItem(cartItem.id))} className='text-white w-full rounded cursor-pointer p-2 mt-2 bg-black' >Remove Item</button></p>
          
            </div>
            

            ):(<div>
                <h1>Cart is Empty</h1>
                    <Link to='/'>
                    <button  className='p-2 bg-black text-white'>Show Now</button>
                    </Link>           
                </div>)
        }
        </div></div>
  )
}

export default Cart