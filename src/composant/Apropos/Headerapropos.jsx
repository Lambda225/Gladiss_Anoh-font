import React from 'react'

function Headerapropos() {
  return (
    <div>
        <header className='flex flex-col items-center justify-around h-screen bg-rose-50 md:flex-row px-[6%] gap-x-[4%]'>
          <div className='w-10/12'>
            <h1 className='text-2xl font-semibold mb-8 text-marron-200 2xl:text-4xl'>CONTACT</h1>
            <p className='2xl:text-2xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis officiis dicta enim quisquam illo aperiam commodi excepturi aspernatur modi obcaecati ullam facere, ad velit esse accusamus voluptates autem qui eligendi.</p>
          </div>
          <div className='w-10/12 h-72 bg-white rounded-lg'></div>
        </header>
    </div>
  )
}

export default Headerapropos