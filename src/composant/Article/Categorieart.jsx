import React from 'react'

function Categorieart() {
  return (
    <div className='bg-rose-50 py-10'>
        <h2 className=' text-xl text-marron-200 font-semibold pl-7 mb-7'>Theme</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 justify-items-center mb-10'>
            <div className="w-80 h-64 bg-blue-200 rounded-lg cursor-pointer flex flex-col justify-end p-5">
                <h3 className=' font-semibold text-white text-lg mb-3'>Titre</h3>
                <p className='text-white'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita cupiditate earum </p>
            </div>
            <div className="w-80 h-64 bg-blue-200 rounded-lg cursor-pointer flex flex-col justify-end p-5">
                <h3 className=' font-semibold text-white text-lg mb-3'>Titre</h3>
                <p className='text-white'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita cupiditate earum </p>
            </div>
            <div className="w-80 h-64 bg-blue-200 rounded-lg cursor-pointer flex flex-col justify-end p-5">
                <h3 className=' font-semibold text-white text-lg mb-3'>Titre</h3>
                <p className='text-white'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita cupiditate earum </p>
            </div>
        </div>
    </div>
  )
}

export default Categorieart