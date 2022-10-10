import React from 'react'

function Hpadcast() {
  return (
    <div>
        <header className='flex flex-col items-center justify-around h-screen bg-rose-50 md:flex-row px-[6%] gap-x-[4%]'>
          <div className='w-10/12'>
            <h1 className='text-2xl font-semibold mb-8 text-marron-200 2xl:text-4xl'>PODCAST</h1>
            <p className='2xl:text-2xl'>Les podcast son des fichiers audios éducatif et motivant vous aidant a progesser donc penser a les écouter</p>
          </div>
          <div className='w-10/12 h-72 bg-white rounded-lg overflow-hidden'><img src="./pexels-harry-cunningham-harrydigital-7383469.jpg" alt="" /></div>
        </header>
    </div>
  )
}

export default Hpadcast