import React from 'react'
import Adnavbar from '../../composant/General/Adnavbar'
import Adsearchbar from '../../composant/General/Adsearchbar'
import Griadaccueil from '../../composant/Adaccueil/Griadaccueil'
import Btnaddcat from '../../composant/General/Btnaddcat'

function Adevenement() {
  const evenement = true
  return (
    <div className='flex h-screen bg-rose-50'>
        <Adnavbar />
        <div className='w-full lg:w-3/4 overflow-y-scroll'>
          <Adsearchbar />
          <div className=" h-full py-10">
            <div className="flex justify-end pr-7">
              <Btnaddcat categorie={'Evenement'}/>
            </div>
            <Griadaccueil evenement={evenement} />
            <Griadaccueil evenement={evenement} />
            <div className="h-10"></div>
          </div>
        </div>
    </div>
  )
}

export default Adevenement