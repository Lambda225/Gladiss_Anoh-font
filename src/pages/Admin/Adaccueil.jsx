import React from 'react'
import Griadaccueil from '../../composant/Adaccueil/Griadaccueil'
import Stat from '../../composant/Adaccueil/Stat'
import Adnavbar from '../../composant/General/Adnavbar'
import Adsearchbar from '../../composant/General/Adsearchbar'

function Adaccueil() {
  const article = "Article"
  const poscast = "Podcast"
  return (
    <div className='flex h-screen bg-rose-50'>
        <Adnavbar />
        <div className='w-full lg:w-3/4 overflow-y-scroll'>
          <Adsearchbar />
          <div className=' h-full py-10'>
            <Stat />
            <Griadaccueil categorie={article}/>
            <Griadaccueil categorie={poscast}/>
            <div className='h-10'></div>
          </div>
        </div>
    </div>
  )
}

export default Adaccueil