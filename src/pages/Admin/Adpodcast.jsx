import React from 'react'
import Griadaccueil from '../../composant/Adaccueil/Griadaccueil'
import Adnavbar from '../../composant/General/Adnavbar'
import Adsearchbar from '../../composant/General/Adsearchbar'
import Btnaddcat from '../../composant/General/Btnaddcat'

function Adpodcast() {
  const article = "Catégorie Podcast"
  return (
    <div className='flex h-screen bg-rose-50'>
        <Adnavbar />
        <div className='w-full lg:w-3/4 overflow-y-scroll'>
          <Adsearchbar />
          <div className='h-full py-10'>
            <div>
              <Btnaddcat categorie={article}/> 
            </div>
            <Griadaccueil />
            <Griadaccueil />
            <div className='h-10'></div>
          </div>
        </div>
    </div>
  )
}

export default Adpodcast