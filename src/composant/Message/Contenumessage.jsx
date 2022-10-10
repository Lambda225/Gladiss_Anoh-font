import { ChevronLeftIcon } from '@heroicons/react/solid'
import React from 'react'

function Contenumessage({evenement,contVisible,setcontVisible}) {
  return (
    <div className={`absolute flex flex-col items-center top-0 ease-out duration-300 bg-white w-full md:w-1/2 py-7 ${contVisible ? " right-0" : "right-[-100%]" } md:right-0`}>
        <div className="flex w-full px-[6%] mb-5">
            <div className='pb-4'>
                <ChevronLeftIcon className='h-10 cursor-pointer mr-4 md:hidden'  onClick={(e) =>{setcontVisible(!contVisible)}} />
            </div>
            <h2 className='text-2xl font-semibold pb-4 relative flex items-center after:absolute after:bottom-0 after:left-[0%] after:h-[2px] 2xl:after:h-[5px] 2xl:after:w-[20%] after:w-[15%] after:bg-marron-200 2xl:text-4xl'>Object du message</h2>
        </div>
        <div className='cartinvite mt-14 w-[80%] sm:w-[60%] md:w-3/4 lg:w-[60%] 2xl:w-[45%]'>
            <div className="flex items-center mb-20">
                <div className=' h-28 w-24 mt-[-55px] rounded-lg bg-blue-200 2xl:h-44 2xl:w-36 overflow-hidden'><img src={evenement.photo} alt="" className='h-full w-full object-cover'/></div>
                <h3 className=' text-lg font-semibold ml-7 2xl:text-xl'>N° 1</h3>
            </div>
            <div className='flex flex-col items-center pt-7 border-t-2 border-gray-300'>
                <h3 className=' text-xl font-semibold text-center mb-3 2xl:text-4xl'>{evenement.titre}</h3>
                <div className="">
                    <p className='mb-2 2xl:text-xl'><span className=' font-semibold'>Nom :</span> Kouamé</p>
                    <p className='mb-2 2xl:text-xl'><span className=' font-semibold '>Prenom :</span> Antonio Parfait</p>
                    <p className='mb-2 2xl:text-xl'><span className=' font-semibold'>Mail :</span> parfaitk02@gmail.com</p>
                </div>
                <a href="https://meet.google.com/qie-fihk-ivd" target="_blank" className='py-4 px-7 text-center mt-2 rounded-lg bg-blue-200 text-white 2xl:text-xl'>Accéder au forum</a>
            </div>
        </div>
    </div>
  )
}

export default Contenumessage