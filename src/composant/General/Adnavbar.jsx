import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Adnavbar() {
  return (
    <div className='flex flex-col items-center w-1/4 shadow-3xl h-screen py-7 z-50'>
        <h2 className='text-2xl font-semibold'>LOGO</h2>
        <div className=" px-7 flex justify-start w-full items-center my-10">
            <div className='h-14 w-14 rounded-full bg-blue-200 mr-6'></div>
            <h1 className='font-semibold text-lg'>Gladis Anoh</h1>
        </div>
        <ul className='flex flex-col w-full items-start'>
            <NavLink to='/admin/' className='w-full' ><li className='px-7 w-full py-3 font-semibold bg-rose-50 border-r-[3px] border-marron-200 text-marron-200'> Accueil</li></NavLink>
            <NavLink to='/admin/article' className='w-full'><li className='px-7 w-full py-3 font-semibold'>Article</li></NavLink>
            <NavLink to='/admin/podcast' className='w-full'><li className='px-7 w-full py-3 font-semibold cursor-pointer'>Podcast</li></NavLink>
            <NavLink to='/admin/forum' className='w-full'><li className='px-7 w-full py-3 font-semibold cursor-pointer'>Forum</li></NavLink>
            <li className='px-7 w-full py-3 font-semibold cursor-pointer'>Livre</li>
            <li className='px-7 w-full py-3 font-semibold cursor-pointer'>Evenement</li>
            <li className='px-7 w-full py-3 font-semibold cursor-pointer'>Avis Internaute</li>
        </ul>
    </div>
  )
}

export default Adnavbar