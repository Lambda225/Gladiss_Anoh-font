import React from 'react'
import { XIcon } from '@heroicons/react/solid'

function Popart({itemart,setopencatre,opencatre}) {
  return (
    <div className={`fixed top-0 left-0 w-full h-screen z-50 ${opencatre ? 'flex' : 'hidden'} flex-col justify-center items-center`}>
        <div className='fixed top-0 left-0 w-full h-screen bg-black opacity-90 z-[-1]'  onClick={(e) => {setopencatre(!opencatre)}}></div>
        <XIcon className='text-white h-7 absolute top-3 right-3 cursor-pointer 2xl:h-12'  onClick={(e) => {setopencatre(!opencatre)}}/>
        <p className=' text-white mb-2 text-xl font-bold w-1/2 text-center'>{itemart.titre}</p>
        <div className=' w-11/12 h-1/3 sm:h-2/4 md:w-9/12 lg:w-6/12 bg-white'>
          <img src={itemart.photo} alt="" className=' object-cover w-full h-full'/>
        </div>
        <p className='text-white w-11/12 mt-3 text-center 2xl:text-2xl'>{itemart.description}</p>
    </div>
  )
}

export default Popart