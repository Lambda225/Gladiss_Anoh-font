import React from 'react'

function Catpodcast() {
  return (
    <div className='grid md:grid-cols-2 justify-items-center gap-10 m-20'>
        <div className='flex flex-col items-center px-[6%]'>
            <div className=' h-64 w-80 bg-blue-200 rounded-lg mb-3'></div>
            <div className='flex flex-col items-center'>
                <p className='text-center mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae saepe facilis dolores quod odit molestias.</p>
                <a href="#" className='w-fit px-10 py-3 rounded-lg bg-blue-200 text-white'>Ecouter</a>
            </div>
        </div>
        <div className='flex flex-col items-center px-[6%]'>
            <div className=' h-64 w-80 bg-blue-200 rounded-lg mb-3'></div>
            <div className='flex flex-col items-center'>
                <p className='text-center mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae saepe facilis dolores quod odit molestias.</p>
                <a href="#" className='w-fit px-10 py-3 rounded-lg bg-blue-200 text-white'>Ecouter</a>
            </div>
        </div>
    </div>
  )
}

export default Catpodcast