import { ChevronRightIcon, MenuAlt2Icon, XIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Adnavbar() {
  const [menu,setmenu] = useState(false)

  return (
    <div className='lg:w-1/4'>
      <div className={`absolute duration-200 top-24 lg:hidden ${menu ? ' right-5 md:right-96' : 'left-2'}  z-[100]  opacity-80 w-12 h-12 rounded-full bg-gray-300 flex justify-center items-center cursor-pointer`} onClick={() => setmenu(!menu)}>{menu ? <XIcon className='h-6 text-gray-900' /> : <MenuAlt2Icon className='h-6 text-gray-900'/>}</div>
      <div className={`absolute duration-200 ${menu ? 'left-0' : 'left-[-100%]'}  top-0 w-9/12 z-[100] flex flex-col items-center md:w-5/12 shadow-3xl h-screen py-7 bg-white`}>
      <Link to="/admin" className='text-2xl font-semibold relative'>NALA <span className=" absolute bottom-[-10px] left-4 font-normal text-xs">coaching</span> </Link>
        <div className=" px-7 flex justify-start w-full items-center my-10">
            <div className='h-14 w-14 rounded-full bg-blue-200 mr-6'></div>
            <h1 className='font-semibold text-lg'>Gladis Anoh</h1>
        </div>
        <ul className='flex flex-col w-full items-start'>
            <NavLink to='/admin/' className='w-full lien' ><li className='px-7 w-full py-3 font-semibold'> Accueil</li></NavLink>
            <NavLink to='/admin/article' className='w-full lien'><li className='px-7 w-full py-3 font-semibold'>Article</li></NavLink>
            <NavLink to='/admin/podcast' className='w-full lien'><li className='px-7 w-full py-3 font-semibold cursor-pointer'>Podcast</li></NavLink>
            <NavLink to='/admin/forum' className='w-full lien'><li className='px-7 w-full py-3 font-semibold cursor-pointer'>Forum</li></NavLink>
            <NavLink to='/admin/livre' className='w-full lien'><li className='px-7 w-full py-3 font-semibold cursor-pointer'>Livre</li></NavLink>
            <NavLink to='/admin/evenement' className='w-full lien'><li className='px-7 w-full py-3 font-semibold cursor-pointer'>Evenement</li></NavLink>
            <NavLink to='/admin/avis' className='w-full lien'><li className='px-7 w-full py-3 font-semibold cursor-pointer'>Avis Internaute</li></NavLink>
        </ul>
      </div>

      {/* Desktop */}

      <div className='z-[100] hidden lg:flex flex-col items-center shadow-3xl h-screen py-7 bg-white'>
      <Link to="/admin" className='text-2xl font-bold relative'>NALA <span className=" absolute bottom-[-10px] left-4 font-normal text-xs">coaching</span> </Link>
        <div className=" px-7 flex justify-start w-full items-center my-10">
            <div className='h-14 w-14 rounded-full bg-blue-200 mr-6'></div>
            <h1 className='font-semibold text-lg'>Gladis Anoh</h1>
        </div>
        <ul className='flex flex-col w-full items-start'>
            <NavLink to='/admin/' className='w-full lien' ><li className='px-7 w-full py-3 font-semibold'> Accueil</li></NavLink>
            <NavLink to='/admin/article' className='w-full lien'><li className='px-7 w-full py-3 font-semibold'>Article</li></NavLink>
            <NavLink to='/admin/podcast' className='w-full lien'><li className='px-7 w-full py-3 font-semibold cursor-pointer'>Podcast</li></NavLink>
            <NavLink to='/admin/forum' className='w-full lien'><li className='px-7 w-full py-3 font-semibold cursor-pointer'>Forum</li></NavLink>
            <NavLink to='/admin/livre' className='w-full lien'><li className='px-7 w-full py-3 font-semibold cursor-pointer'>Livre</li></NavLink>
            <NavLink to='/admin/evenement' className='w-full lien'><li className='px-7 w-full py-3 font-semibold cursor-pointer'>Evenement</li></NavLink>
            <NavLink to='/admin/avis' className='w-full lien'><li className='px-7 w-full py-3 font-semibold cursor-pointer'>Avis Internaute</li></NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Adnavbar