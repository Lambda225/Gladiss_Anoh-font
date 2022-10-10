import React from 'react'

function Cartelivre({livre}) {
  return (
    <div onClick={()=>console.log(livre.id)} className='flex flex-col items-center w-full'>
      <div className='w-8/12 2xl:w-6/12 h-44 2xl:h-64 rounded-lg bg-blue-200 mb-5 overflow-hidden'> <img src={livre.photo} alt="" className=' object-cover h-full w-full' /> </div>
      <p className='text-center 2xl:text-2xl'>{livre.descrption}</p>
      <a href={livre.lien_achat} className=' px-6 py-3 2xl:px-10 2xl:py-3 2xl:text-2xl rounded-lg mt-5 bg-marron-200 text-white '>Acheter</a>
    </div>
  )
}

export default Cartelivre