import React from 'react'
import {ChevronDownIcon} from '@heroicons/react/solid'

function Itempodcast() {
  return (
    <div className='py-10 bg-rose-50 flex flex-col items-center'>
        <div className='flex justify-center items-center mt-8 cursor-pointer w-fit'><h3 className='text-xl font-semibold text-marron-200'>Theme</h3> <ChevronDownIcon className='h-5 ml-4 text-blue-200' /></div>
        <div className="grid justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-7 sm:gap-x-12 mt-10">
            <div className='flex flex-col items-center'>
                <div className='h-52 w-52 rounded-lg bg-blue-200 cursor-pointer mb-3'></div>
                <h3 className='text-center'>Lorem ipsum dolor sit amet.</h3>
            </div>
            <div className='flex flex-col items-center'>
                <div className='h-52 w-52 rounded-lg bg-blue-200 cursor-pointer mb-3'></div>
                <h3 className='text-center'>Lorem ipsum dolor sit amet.</h3>
            </div>
            <div className='flex flex-col items-center'>
                <div className='h-52 w-52 rounded-lg bg-blue-200 cursor-pointer mb-3'></div>
                <h3 className='text-center'>Lorem ipsum dolor sit amet.</h3>
            </div>
            <div className='flex flex-col items-center'>
                <div className='h-52 w-52 rounded-lg bg-blue-200 cursor-pointer mb-3'></div>
                <h3 className='text-center'>Lorem ipsum dolor sit amet.</h3>
            </div>
            <div className='flex flex-col items-center'>
                <div className='h-52 w-52 rounded-lg bg-blue-200 cursor-pointer mb-3'></div>
                <h3 className='text-center'>Lorem ipsum dolor sit amet.</h3>
            </div>
            <div className='flex flex-col items-center'>
                <div className='h-52 w-52 rounded-lg bg-blue-200 cursor-pointer mb-3'></div>
                <h3 className='text-center'>Lorem ipsum dolor sit amet.</h3>
            </div>
            <div className='flex flex-col items-center'>
                <div className='h-52 w-52 rounded-lg bg-blue-200 cursor-pointer mb-3'></div>
                <h3 className='text-center'>Lorem ipsum dolor sit amet.</h3>
            </div>
            <div className='flex flex-col items-center'>
                <div className='h-52 w-52 rounded-lg bg-blue-200 cursor-pointer mb-3'></div>
                <h3 className='text-center'>Lorem ipsum dolor sit amet.</h3>
            </div>
        </div>
    </div>
  )
}

export default Itempodcast