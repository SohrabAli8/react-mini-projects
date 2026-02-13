import React, { useEffect, useState } from 'react'

        function Square({value,onClick}){
            return     <button
             onClick={onClick} className="w-30 h-30 font-bold text-4xl  border hover:bg-gray-100 ">
              
{value}</button>
        }
function TicTacToe() {

        const [square,setSquare]=useState(Array(9).fill(""))
        const [isXturn,setIsXturn]=useState(true)
        const [status,setStatus]= useState('')
      const handleClick = (squareId)=>{
         let cpySquare=[...square]
         if (getWinner(cpySquare)||  cpySquare[squareId]) return 
         cpySquare[squareId]=isXturn?'X':'O'
         setIsXturn(!isXturn)
         setSquare(cpySquare)

      }

      const handleStatus=()=>{
        setStatus('')
        setIsXturn(true)
        setSquare(Array(9).fill(""))
      }


        function getWinner(square)
        {
          const winPatern = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [2,5,8],
            [0,4,8],
            [2,4,6],
            [0,3,6],
            [1,4,7],
          ]
          for(let i=0; i<winPatern.length; i++)
          {
            const [x,y,z]=winPatern[i]
            if(square[x]&& square[x]===square[y] && square[x]===square[z])
              return square[x]

          }
        }

          useEffect(()=>{
            if(getWinner(square))
              setStatus(`Winner is ${getWinner(square)}`)

            else if( square.every(item=>item!==''))
            {
              setStatus('This is a draw! Please Reset')
            }
            
            else
              setStatus(`Next Player is: ${isXturn? 'X':'O'}`)
            
          },[square,isXturn])

  return (
    
    <div className='flex flex-col justify-center items-center mt-20 '>
      <h1 className='text-2xl mb-10'>Tic-Tac-Toe</h1>
    <div className='grid grid-cols-3 border border-black ' >
        <Square onClick={()=>handleClick(0)} value={square[0]}/>
        <Square onClick={()=>handleClick(1)} value={square[1]}/>
        <Square onClick={()=>handleClick(2)} value={square[2]}/>
        <Square onClick={()=>handleClick(3)} value={square[3]}/>
        <Square onClick={()=>handleClick(4)} value={square[4]}/>
        <Square onClick={()=>handleClick(5)} value={square[5]}/>
        <Square onClick={()=>handleClick(6)} value={square[6]}/>
        <Square onClick={()=>handleClick(7)} value={square[7]}/>
        <Square onClick={()=>handleClick(8)} value={square[8]}/>
 
   </div>
   <p className='text-2xl font-bold text-orange-600 mt-8'> {status}</p>
   <button onClick={handleStatus}

    className='p-2 px-4 mt-4 bg-green-400  rounded-2xl '>Reset</button>
    </div>
  )
}

export default TicTacToe