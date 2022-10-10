import React from 'react'

function Erreur404() {
  return (
    <div className=' h-screen bg-rose-50 flex flex-col justify-center items-center'>
      <h1 className=' text-6xl sm:text-8xl 2xl:text-9xl font-semibold'>Erreur 404</h1>
      <p className='text-center sm:text-lg 2xl:text-2xl'>Pas de page trouver</p>
    </div>
  )
}

export default Erreur404