import React from 'react'

function Cartelivre({livre}) {
  return (
    <div onClick={()=>console.log(livre.id)} className='flex flex-col items-center w-full'>
      <div className='w-8/12 h-44 rounded-lg bg-blue-200 mb-5'></div>
      <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quod!</p>
      <a href="#" className=' px-6 py-3 rounded-lg mt-5 bg-marron-200 text-white '>Acheter</a>
    </div>
  )
}

export default Cartelivre