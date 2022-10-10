import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../api/axios'

function Evenement({evenements}) {

  return (
    <div>
        <div className={`relative my-20 bg-rose-50 pb-[150px] pt-7 md:pb-5 2xl:pt-12 ${evenements ? '' : 'hidden'}`}>
            <div className='w-[75%] sm:w-1/2 md:w-[35%] lg:w-1/4 h-[500px] 2xl:h-[600px] bg-blue-200 rounded-lg absolute left-[50%] translate-x-[-50%] top-[70%] md:left-[10%] md:translate-x-0 md:top-5 overflow-hidden'><img src={evenements.photo} alt="" className='object-cover w-full h-full' /></div>
            <div className='flex justify-center md:justify-end md:px-[10%]'>
                <div className='w-10/12 sm:w-9/12 md:w-2/5 lg:w-1/2 mb-10'>
                    <h2 className="text-2xl text-marron-200 font-semibold pb-2 w-3/4 md:w-full after:content-[''] after:h-0.5 after:w-full after:bg-marron-200 relative after:absolute after:left-0 after:bottom-0 mb-4 2xl:text-4xl">{evenements.titre}</h2>
                    <p className='2xl:text-2xl'>{evenements.description} <br /> <span className='font-semibold'>{evenements.date}</span></p>
                    <div className='flex justify-center mt-6 md:justify-start'><Link to='inscription' className='px-5 py-3 2xl:px-8 2xl:py-5 rounded-lg bg-marron-200 text-white 2xl:text-2xl'>Acheter accès</Link></div>
                </div>
            </div>
        </div>
        <div className='h-[320px] md:h-[150px] lg:h-[200px]'></div>
    </div>
  )
}

export default Evenement