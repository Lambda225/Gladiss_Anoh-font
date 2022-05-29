import { BellIcon, CalendarIcon, LogoutIcon, SearchIcon } from '@heroicons/react/solid'
import React from 'react'

function Adsearchbar() {
  return (
    <div className='flex justify-between items-center w-full px-7 py-4'>
        <form action="#" className='flex justify-center rounded-xl shadow-3xl overflow-hidden '>
            <input type="text" className=' w-full h-full focus:outline-none py-2 px-2'/>
            <button className='p-2'><SearchIcon className='text-blue-200 h-6'/></button>            
        </form>
        <div className='flex'>
            <BellIcon className='h-6 text-blue-200 mx-4' />
            <CalendarIcon className='h-6 text-blue-200 mx-4' />
            <LogoutIcon className='h-6 text-blue-200 mx-4' />
        </div>
    </div>
  )
}

export default Adsearchbar