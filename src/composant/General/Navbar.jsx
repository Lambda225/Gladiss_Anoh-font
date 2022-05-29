import React from 'react'
import { BellIcon,ChatIcon,UserIcon,DotsVerticalIcon,ChevronRightIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { NavLink } from "react-router-dom"

function Navbar(props) {
    const [nav,setNav] = useState(false)
    const changeNav = ()=>{setNav(!nav)}
  return (
    <div>
         <nav className='flex justify-between py-8 px-7 bg-rose-50 border-[1px] border-b-marron-200 fixed w-full z-30'>
            <div className='flex'>
                <h1 className='font-bold items-center flex text-2xl'><NavLink to="/">LOGO</NavLink></h1>
                <ul className='hidden md:flex items-center ml-8'>
                    <NavLink to='/forum'><li className='mx-3'>Forum</li></NavLink>
                    <li className='mx-3'>Post</li>
                    <NavLink to='/calendrier'><li className='mx-3'>Calendrier</li></NavLink>
                    <NavLink to='/boutique' ><li className='mx-3'>Boutique</li></NavLink>
                    <NavLink to='/apropos' ><li className='mx-3'>A propos</li></NavLink>
                </ul>
            </div>
            <div className='hidden sm:flex justify-center items-center'>
                <NavLink to='/message'><div><ChatIcon className='h-6 mx-2'/></div></NavLink>
                <div><BellIcon className='h-6 mx-2'/></div>
                <NavLink to='/connexion' ><div className='h-16 w-16 mx-2 rounded-full bg-white flex justify-center items-center'><UserIcon className='h-10'/></div></NavLink>
                <div onClick={changeNav} className='cursor-pointer hidden mx-2 sm:block md:hidden'><DotsVerticalIcon className='h-6'/></div>
            </div>
            <div onClick={changeNav} className='cursor-pointer sm:hidden'><DotsVerticalIcon className='h-6'/></div>
        </nav>
        <div className=' h-24 sm:h-32'></div>
        <div></div>
        <div className={`fixed w-full h-screen z-50 bg-white top-0 duration-200 ease-ino overflow-y-scroll sm:overflow-auto sm:w-1/2 ${!nav ? 'right-[-100%]' : 'right-0'}`}>
            <div className='flex justify-between sm:justify-end items-center py-8 px-7 bg-white'>
                <h1 className='font-bold text-2xl sm:hidden'><NavLink to='/'>LOGO</NavLink></h1>
                <div className='flex md:hidden justify-center items-center'>
                    <div><ChatIcon className='h-6 mx-2 hidden sm:block md:hidden'/></div>
                    <div><BellIcon className='h-6 mx-2 hidden sm:block md:hidden'/></div>
                    <NavLink to='/connexion '><div className='h-16 w-16 mx-2 rounded-full bg-rose-50 hidden sm:flex md:hidden justify-center items-center'><UserIcon className='h-10'/></div></NavLink>
                    <div onClick={changeNav} className='cursor-pointer mx-2'><DotsVerticalIcon className='h-6'/></div>
                </div>
            </div> 
            <ul className='flex flex-col'>
                <NavLink to='/forum'><li className='px-8 py-5 border-b-2 border-marron-200'>Forum</li></NavLink>
                <li className='px-8 py-5 border-b-2 border-marron-200 flex justify-between'>Post <ChevronRightIcon className='h-6'/></li>
                <NavLink to='/calendrier'><li className='px-8 py-5 border-b-2 border-marron-200'>Calendrier</li></NavLink>
                <NavLink to='/boutique' ><li className='px-8 py-5 border-b-2 border-marron-200'>Boutique</li></NavLink>
                <NavLink to='/apropos' ><li className='px-8 py-5 border-b-2 border-marron-200'>A propos</li></NavLink>
            </ul>
                <NavLink to='/connexion' className='py-8 px-5 flex items-center w-fit sm:hidden'>
                    <div className='h-16 w-16 rounded-full bg-rose-50 flex justify-center items-center'><UserIcon className='h-10'/></div>
                    <h4 className='ml-8'>Connexion</h4>
                </NavLink>
            <ul className='flex flex-col sm:hidden'>
                <NavLink to='/message'><li className='px-8 py-5 border-b-2 border-marron-200 flex justify-between'>Message <ChatIcon className='h-6'/></li></NavLink>
                <li className='px-8 py-5 border-b-2 border-marron-200 flex justify-between'>Notification <BellIcon className='h-6'/></li>
            </ul>
            <div className="flex py-8 justify-center">
                <div className='h-14 w-14 rounded-full bg-rose-50 mx-3'></div>
                <div className='h-14 w-14 rounded-full bg-rose-50 mx-3'></div>
                <div className='h-14 w-14 rounded-full bg-rose-50 mx-3'></div>
            </div>
        </div>
    </div>
  )
}

Navbar.propTypes = {}

export default Navbar
