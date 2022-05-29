import React from 'react'
import Adnavbar from '../../composant/General/Adnavbar'
import Adsearchbar from '../../composant/General/Adsearchbar'
import Griadaccueil from '../../composant/Adaccueil/Griadaccueil'
import Btnaddcat from '../../composant/General/Btnaddcat'

function Adevenement() {
  const evenement = true
  return (
    <div className='flex'>
        <Adnavbar />
        <div className='w-3/4 h-screen overflow-y-scroll'>
          <Adsearchbar />
          <div className="bg-rose-50 py-10">
            <div className="flex justify-end pr-7">
              <Btnaddcat categorie={'Evenement'}/>
            </div>
            <Griadaccueil evenement={evenement} />
            <Griadaccueil evenement={evenement} />
          </div>
        </div>
    </div>
  )
}

export default Adevenement