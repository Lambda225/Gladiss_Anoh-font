import { PencilIcon, UserIcon } from '@heroicons/react/solid'
import React from 'react'
import Navbar from '../../composant/General/Navbar'

function Userinfo() {
  return (
    <div>
        <Navbar />
        <div className='flex flex-col sm:flex-row justify-center items-center h-screen'>
            <div className='h-60 w-48 flex items-center rounded-lg sm:mr-5 shadow-3xl mb-7 sm:mb-0'><UserIcon className='h12 text-blue-200'/></div>
            <div className='text-center sm:text-left'>
                <h1 className=' text-xl font-semibold mb-2'>KOUAME</h1>
                <h2 className=' text-base font-semibold mb-2'>ANTONIO PARFAIT</h2>
                <h3 className='mb-3'>parfaitk02@gmail.com</h3>
                <a href='#' className=' bg-blue-200 rounded-lg flex justify-center items-center text-white py-3'><PencilIcon className='h-7 mr-1'/> Modifier</a>
            </div>
        </div>
    </div>
  )
}

export default Userinfo