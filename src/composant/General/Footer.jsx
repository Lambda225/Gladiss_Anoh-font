import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='py-10 px-[6%] border-t-[1px] border-gray-200'>
        <div className='md:flex items-center justify-between'>
            <div>
                <NavLink to='/' ><h1 className='text-xl font-semibold text-center mb-7'>LOGO</h1></NavLink>
                <div className='flex gap-3 justify-center mb-10'>
                    <div className=' h-16 w-16 rounded-full bg-rose-50 '></div>
                    <div className=' h-16 w-16 rounded-full bg-rose-50 '></div>
                    <div className=' h-16 w-16 rounded-full bg-rose-50 '></div>
                </div>
            </div>
            <ul className='flex justify-center flex-wrap mb-4 gap-y-4'>
                <NavLink to='/forum'><li className='mx-3'>Forum</li></NavLink>
                <li className='mx-3'>Post</li>
                <NavLink to='/calendrier' ><li className='mx-3'>Calendrier</li></NavLink>
                <NavLink to='/boutique' ><li className='mx-3'>Boutique</li></NavLink>
                <NavLink to='/apropos' ><li className='mx-3'>A propos</li></NavLink>
            </ul>
        </div>
        <div className='flex flex-col items-center border-t-[1px] border-gray-200 pt-4 sm:flex-row sm:justify-between '>
            <p className='mb-2 sm:mb-0 text-xs'>Copyright © 2022 Gladis Anoh</p>
            <p className=' text-xs'>Par Kouamé Antonio</p>
        </div>
    </div>
  )
}

export default Footer