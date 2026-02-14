import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addToCart,removeItem} from '../store/Cart-slice'
function ProductTile({product}) {
    const dispatch=useDispatch()
    const cart=useSelector(state=>state.cart)
    function handleClick(){
        dispatch(addToCart(product))
    }
    function handleRemove(){
        dispatch(removeItem(product.id))        
    }
  return (
    <div className='bg-gray-300  border  border-black rounded-xl hover:shadow-2xl  transition duration-300  mt-10'>
        
        
      <div className='h-52'>
            <img src={product?.image} alt={product?.title} className='object-contain rounded-xl w-full h-full bg-gray-300 ' />

        </div>
        <h1 className='  mt-2 mx-10 w-40 text-xl  text-center truncate items-center'>{product?.title}</h1>
        <div className='flex flex-col items-center justify-center mt-2 mb-1.5'>
            <button onClick={cart.some(item=>item.id===product.id)?handleRemove:handleClick} className='cursor-pointer rounded-2xl bg-black text-white p-1 px-4 text-xl'>
                {
                    cart.some(item=>item.id===product.id)?'Remove from cart':'Add to Cart'
                }
                </button>
        </div>
    </div>
  )
}

export default ProductTile