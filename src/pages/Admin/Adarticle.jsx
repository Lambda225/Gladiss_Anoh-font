import React from 'react'
import Griadaccueil from '../../composant/Adaccueil/Griadaccueil'
import Adnavbar from '../../composant/General/Adnavbar'
import Adsearchbar from '../../composant/General/Adsearchbar'
import Btnaddcat from '../../composant/General/Btnaddcat'

function Adarticle() {
    const article = "Article"
  return (
    <div className='flex'>
        <Adnavbar />
        <div className='w-3/4 h-screen overflow-y-scroll'>
          <Adsearchbar />
          <div className='bg-rose-50 py-10'>
            <div>
              <Btnaddcat categorie={article}/>
            </div>
            <Griadaccueil />
            <Griadaccueil />
          </div>
        </div>
    </div>
  )
}

export default Adarticle