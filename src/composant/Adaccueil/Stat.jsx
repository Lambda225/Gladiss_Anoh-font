import React from 'react'

function Stat(propos) {
  
  return (
    <div className='flex justify-center flex-row p-7'>
        <div className='flex items-center px-5 py-5 border-b-2 md:border-b-0 md:border-r-2 border-marron-200'>
            <h2 className='text-2xl font-semibold mr-4'>{propos.articles.length}</h2>
            <p>Nombre d'article</p>
        </div>
        <div className='flex items-center px-5 py-5 border-b-2 md:border-b-0 md:border-r-2 border-marron-200'>
            <h2 className='text-2xl font-semibold mr-4'>{propos.podcast.length}</h2>
            <p>Nombre de podcast</p>
        </div>
        <div className='flex items-center px-5 py-5'>
            <h2 className='text-2xl font-semibold mr-4'>120</h2>
            <p>Nombre d'utilisateur</p>
        </div>
    </div>
  )
}

export default Stat