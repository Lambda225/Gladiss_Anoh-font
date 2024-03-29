import React from 'react'

function Headerboutique() {
  return (
    <div>
        <header className='flex flex-col items-center justify-center gap-y-6 h-screen md:flex-row px-[6%] md:gap-x-[4%]'>
          <div className='w-10/12'>
            <h1 className='text-2xl 2xl:text-4xl font-semibold mb-8 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-3/4 after:h-[3px] sm:after:w-1/2 after:bg-marron-200'>BOUTIQUE</h1>
            <p className='2xl:text-2xl'>Nos livres son des ressouces indispensables pour vous faire atteindre des sommets donc pensé en acheter.</p>
          </div>
          <div className='w-10/12 h-72 bg-blue-200 rounded-lg overflow-hidden'><img src="./pexels-suzy-hazelwood-2309235.jpg" alt="" /></div>
        </header>
    </div>
  )
}

export default Headerboutique