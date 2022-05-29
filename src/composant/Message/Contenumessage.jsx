import { ChevronLeftIcon } from '@heroicons/react/solid'
import React from 'react'

function Contenumessage(props) {
  return (
    <div className={`absolute flex flex-col items-center top-0 ease-out duration-300 bg-white w-full md:w-1/2 py-7 ${props.contVisible ? " right-0" : "right-[-100%]" } md:right-0`}>
        <div className="flex w-full px-[6%] mb-5">
            <div className='pb-4'>
                <ChevronLeftIcon className='h-10 cursor-pointer mr-4 md:hidden'  onClick={(e) =>{props.setcontVisible(!props.contVisible)}} />
            </div>
            <h2 className='text-2xl font-semibold pb-4 relative flex items-center after:absolute after:bottom-0 after:left-[0%] after:h-[2px] after:w-[15%] after:bg-marron-200'>Object du message</h2>
        </div>
        <div className='cartinvite mt-14 w-[80%] sm:w-[60%] md:w-3/4 lg:w-[60%]'>
            <div className="flex items-center mb-20">
                <div className=' h-28 w-24 mt-[-55px] rounded-lg bg-blue-200'></div>
                <h3 className=' text-lg font-semibold ml-7'>N° 3</h3>
            </div>
            <div className='flex flex-col items-center pt-7 border-t-2 border-gray-300'>
                <h3 className=' text-xl font-semibold text-center mb-3'>Evenement</h3>
                <div className="">
                    <p className='mb-2'><span className=' font-semibold'>Nom :</span> Kouamé</p>
                    <p className='mb-2'><span className=' font-semibold '>Prenom :</span> Antonio Parfait</p>
                    <p className='mb-2'><span className=' font-semibold'>Mail :</span> parfaitk02@gmail.com</p>
                </div>
                <a href="#" className='py-4 px-7 mt-2 rounded-lg bg-blue-200 text-white'>Accéder au forum</a>
            </div>
        </div>
    </div>
  )
}

export default Contenumessage