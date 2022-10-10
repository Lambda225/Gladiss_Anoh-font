import React from 'react'
import { Link } from 'react-router-dom'

function Categorieart({catarticle}) {
  return (
    <div className='bg-rose-50 py-10'>
        <h2 className=' text-xl text-marron-200 font-semibold pl-7 mb-7'>Theme</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 justify-items-center mb-10'>
            {catarticle.map(cat => {
                return  (<Link key={cat.id} to={`/itemarticle/${cat.id}`} className="w-80 h-64 2xl:w-96 2xl:h-80 bg-blue-200 rounded-lg flex flex-col justify-end p-5">
                    <h3 className=' font-semibold text-white text-lg mb-3 2xl:text-2xl'>{cat.titre}</h3>
                    <p className='text-white 2xl:text-2xl'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita cupiditate earum </p>
                </Link>)
            })}
        </div>
    </div>
  )
}

export default Categorieart