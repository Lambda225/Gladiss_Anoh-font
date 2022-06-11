import React from 'react'
import { catpodcast } from '../../data'

function Catpodcast() {
  return (
    <div className='grid md:grid-cols-2 2xl:grid-cols-3 justify-items-center gap-10 m-20'>
        {catpodcast.map(cat => {
            return (<div className='flex flex-col items-center px-[6%]'>
                <div className=' h-64 w-80 bg-blue-200 rounded-lg mb-3'></div>
                <div className='flex flex-col items-center'>
                    <p className='text-center mb-3 2xl:text-2xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae saepe facilis dolores quod odit molestias.</p>
                    <a href="#" className='w-fit px-10 py-3 2xl:px-16 2xl:py-5 2xl:text-2xl rounded-lg bg-blue-200 text-white'>Ecouter</a>
                </div>
            </div>)
        })}
    </div>
  )
}

export default Catpodcast