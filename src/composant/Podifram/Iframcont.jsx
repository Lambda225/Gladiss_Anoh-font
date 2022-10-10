import React from 'react'


function Iframcont({podcast}) {
  const test = '<strom'
  return (
    <div className='bg-rose-50 py-20 px-10 min-h-screen'>
        <h1 className='text-2xl font-semibold mb-10 text-marron-200'>{podcast.titre}</h1>
        <div className=' w-11/12 rounded-lg mb-10 ' dangerouslySetInnerHTML={{__html: podcast.Ifram}}></div>
        <div className=''>
            <h2 className='text-xl text-marron-200 font-semibold mb-3'>Drescription</h2>
            <p className='md:w-11/12' >{podcast.description}</p>
        </div>
    </div>
  )
}

export default Iframcont