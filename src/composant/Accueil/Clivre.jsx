import { ArrowNarrowRightIcon } from '@heroicons/react/solid'
import React from 'react'
import Sliderlivre from './Sliderlivre'

function Clivre() {
  return (
    <div className='flex flex-col p-[6%] mb-20 md:flex-row md:justify-between px-[6%]'>
        <div className='w-9/12 mb-10 md:w-1/3'>
            <p className='mb-6 text-sm 2xl:text-xl'>Livre de Gladiss Anoh</p>
            <h2 className="text-xl font-semibold mb-3 pb-3 after:content-[''] after:h-1 after:w-1/3 after:bg-marron-200 relative after:absolute after:left-0 after:bottom-0 2xl:text-3xl">Liser mes livres et commencer une nouvelle vie</h2>
            <p className='mb-3 2xl:text-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure fugiat neque dolorem error, illo officiis aliquid architecto cum nihil nulla?</p>
            <a href="#" className='flex items-center text-marron-200 2xl:text-2xl'>Acheter livre <ArrowNarrowRightIcon className='h-4 ml-2 2xl:h-8' /></a>
        </div>
        <div className='flex justify-center md:w-1/2'>
            <Sliderlivre />
        </div>
    </div>
  )
}

export default Clivre