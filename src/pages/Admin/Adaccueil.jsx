import React from 'react'
import Griadaccueil from '../../composant/Adaccueil/Griadaccueil'
import Stat from '../../composant/Adaccueil/Stat'
import Adnavbar from '../../composant/General/Adnavbar'
import Adsearchbar from '../../composant/General/Adsearchbar'

function Adaccueil() {
  const article = "Article"
  const poscast = "Podcast"
  return (
    <div className='flex'>
        <Adnavbar />
        <div className='w-3/4 h-screen overflow-y-scroll'>
          <Adsearchbar />
          <div className='bg-rose-50 py-10'>
            <Stat />
            <Griadaccueil categorie={article}/>
            <Griadaccueil categorie={poscast}/>
          </div>
        </div>
    </div>
  )
}

export default Adaccueil