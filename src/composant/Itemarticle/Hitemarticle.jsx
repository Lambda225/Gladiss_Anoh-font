import React from 'react'

function Hitemarticle() {
  return (
    <div>
        <header className='flex flex-col items-center justify-center gap-y-6 h-screen md:flex-row px-[6%] md:gap-x-[4%]'>
          <div className="w-10/12">
            <h1 className='text-2xl font-semibold mb-8 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-3/4 after:h-[3px] sm:after:w-1/2 after:bg-marron-200'>THEME</h1>
            <div className='h-72 bg-blue-200 rounded-lg'></div>
          </div>
          <div className='w-10/12'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis officiis dicta enim quisquam illo aperiam commodi excepturi aspernatur modi obcaecati ullam facere, ad velit esse accusamus voluptates autem qui eligendi.</p>
          </div>
        </header>
    </div>
  )
}

export default Hitemarticle