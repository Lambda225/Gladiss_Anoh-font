import React from 'react'

function Invitationinscpt() {
  return (
    <div className='flex px-[6%] py-10 bg-rose-50 flex-col sm:flex-row sm:gap-5'>
        <div className='md:w-3/5'>
            <h1 className='text-xl font-semibold text-marron-200 mb-6 2xl:text-4xl'>Pensez à vous créer un compte</h1>
            <p className='2xl:text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit odit reiciendis magni eveniet mollitia labore esse in molestiae aliquid perspiciatis?</p>
        </div>
        <div className='flex mt-6 sm:h-fit sm:justify-end sm:w-1/2'>
            <a href="#" className='py-3 px-5 2xl:py-5 2xl:px-8 bg-marron-200 text-white rounded-lg 2xl:text-2xl'>Inscription</a>
        </div>
    </div>
  )
}

export default Invitationinscpt