import React from 'react'

function Headerpost() {
  return (
    <div>
        <header className='flex flex-col-reverse items-center justify-center gap-y-6 h-screen md:flex-row px-[6%] md:gap-x-[4%]'>
          <div className='w-10/12 h-72 bg-blue-200 rounded-lg overflow-hidden'><img src="./pexels-ekrulila-2333332.jpg" alt="" /></div>
          <div className='w-10/12'>
            <h1 className='text-2xl font-semibold mb-8 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-3/4 after:h-[3px] sm:after:w-1/2 after:bg-marron-200 2xl:text-4xl'>ARTICLE</h1>
            <p className='2xl:text-2xl'>Souyer a la page sur des message inedite sur la manier d'atteindr ses objectifs en regardant nos articles</p>
          </div>
        </header>
    </div>
  )
}

export default Headerpost