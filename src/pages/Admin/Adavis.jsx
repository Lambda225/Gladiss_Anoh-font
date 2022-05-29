import React from 'react'
import Gritem from '../../composant/Adlivre/Gritem'
import Adnavbar from '../../composant/General/Adnavbar'
import Adsearchbar from '../../composant/General/Adsearchbar'
import Btnaddcat from '../../composant/General/Btnaddcat'

function Adavis() {
    const avis = true
  return (
    <div>
        <div className='flex'>
        <Adnavbar />
        <div className='w-3/4 h-screen overflow-y-scroll'>
          <Adsearchbar />
          <div className="bg-rose-50 pt-20">
            <Gritem avis={avis} />
          </div>
        </div>
    </div>
    </div>
  )
}

export default Adavis