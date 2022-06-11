import React from 'react'

function Stat() {
  return (
    <div className='flex flex-col md:flex-row p-7'>
        <div className='flex items-center px-5 py-5 border-b-2 md:border-b-0 md:border-r-2 border-marron-200'>
            <h2 className='text-2xl font-semibold mr-4'>120</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing el.?</p>
        </div>
        <div className='flex items-center px-5 py-5 border-b-2 md:border-b-0 md:border-r-2 border-marron-200'>
            <h2 className='text-2xl font-semibold mr-4'>120</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing el.?</p>
        </div>
        <div className='flex items-center px-5 py-5'>
            <h2 className='text-2xl font-semibold mr-4'>120</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing el.?</p>
        </div>
    </div>
  )
}

export default Stat