import { DownloadIcon, UserIcon } from '@heroicons/react/solid'
import React from 'react'
import Navbar from '../../composant/General/Navbar'

function Updateuser() {
  return (
    <div className=' bg-rose-50 min-h-screen'>
        <Navbar />
        <div className='bg-rose-50 min-h-screen flex flex-col items-center py-20 md:flex-row sm:gap-x-5 lg:gap-x-14 sm:justify-center '>
            <form action="#" className='flex flex-col w-11/12 sm:w-[80%] md:w-[55%] lg:w-[45%] items-center bg-white px-[8%] py-9 lg:py-7 sm:p-[6%] lg:px-[4%] rounded-lg shadow-3xl'>
                <div className='mb-7'>
                    <div className=" h-28 w-28 rounded-lg bg-blue-200 flex justify-center items-center"><UserIcon className=' h-20 text-white' /></div>
                    <div className=' relative'>
                        <input type="file" name="" id="bim" className='hidden' />
                        <label htmlFor="bim" className='absolute right-[-8px] bottom-[-8px] bg-white rounded-full p-1 shadow-3xl cursor-pointer'><DownloadIcon className=' h-6' /></label>
                    </div>
                </div>
                <div className='w-full sm:flex sm:gap-8'>
                    <input type="text" placeholder='Nom' className='w-full bg-transparent border-b-2 border-blue-200 py-2 mb-8 focus:outline-none'/>
                    <input type="text" placeholder='Prenom' className='w-full bg-transparent border-b-2 border-blue-200 py-2 mb-8 focus:outline-none'/>
                </div>
                <input type="text" placeholder='Date de naissance' className='w-full bg-transparent border-b-2 border-blue-200 py-2 mb-8 focus:outline-none' onFocus={(e) => {e.target.type="date"}} onBlur={(e) => {e.target.value ? e.target.type = "text" : e.target.type="date"}} onClick={(e) => {e.target.type="date"}}/>
                <input type="email" placeholder='Mail' className='w-full bg-transparent border-b-2 border-blue-200 py-2 mb-8 focus:outline-none'/>
                <div className='w-full sm:flex sm:gap-8'>
                <input type="password" placeholder='Mots de passe' className='w-full bg-transparent border-b-2 border-blue-200 py-2 mb-8 focus:outline-none' />
                <input type="password" placeholder='Confirmer mots de passe' className='w-full bg-transparent border-b-2 border-blue-200 py-2 mb-8 focus:outline-none' />
                </div>
                <button className='w-full py-4 text-white bg-blue-200 rounded-lg mb-4'>Mettre a jour</button>
            </form>     
        </div>
    </div>
  )
}

export default Updateuser