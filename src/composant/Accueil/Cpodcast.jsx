import {ArrowNarrowRightIcon} from '@heroicons/react/solid'
import React from 'react'

function Podcast() {
  return (
    <div className='bg-rose-50 py-12 px-12 flex flex-col md:flex-row md:gap-x-8'>
        <div className='md:w-1/2'>
            <h2 className='text-2xl font-semibold mb-4 text-marron-200'>Podcast</h2>
            <p className='mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam illo sint, ipsa facilis eum nihil suscipit quod possimus autem ea?</p>
            <a href="#" className='flex items-center text-marron-200'>Acheter livre <ArrowNarrowRightIcon className='h-4 ml-2' /></a>
        </div>
        <div className='flex flex-col items-center gap-4 mt-7 md:w-1/2 md:flex-row md:mt-0'>
            <div className='w-3/4 h-44 sm:w-1/2 bg-blue-200 rounded-lg md:h-60'></div>
            <div className='w-3/4 h-44 sm:w-1/2 bg-blue-200 rounded-lg md:h-60'></div>
        </div>
    </div>
  )
}

export default Podcast