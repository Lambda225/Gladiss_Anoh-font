import React from 'react'

function Catpodcast({catpodcast}) {
  return (
    <div className='grid md:grid-cols-2 2xl:grid-cols-3 justify-items-center gap-10 m-20'>
        {catpodcast.map(cat => {
            return (<div key={cat.id} className='flex flex-col items-center px-[6%]'>
                <div className=' h-64 w-80 bg-blue-200 rounded-lg mb-3 overflow-hidden'> <img src={cat.photo} alt="" className=' object-cover w-full h-full' /> </div>
                <div className='flex flex-col items-center'>
                    <p className='text-center mb-3 2xl:text-2xl'>{cat.description}</p>
                    <a href={cat.lienspotify} className='w-fit px-10 py-3 2xl:px-16 2xl:py-5 2xl:text-2xl rounded-lg bg-blue-200 text-white'>Ecouter</a>
                </div>
            </div>)
        })}
    </div>
  )
}

export default Catpodcast