import React from 'react'
import Gritem from '../../composant/Adlivre/Gritem'
import Adnavbar from '../../composant/General/Adnavbar'
import Adsearchbar from '../../composant/General/Adsearchbar'

function Adavis() {
    const avis = true
  return (
    <div className='bg-rose-50 min-h-screen'>
        <div className='flex '>
        <Adnavbar />
        <div className=' z-0 w-full lg:w-3/4'>
          <Adsearchbar />
          <div className="pt-20">
            <Gritem avis={avis} />
          </div>
        </div>
    </div>
    </div>
  )
}

export default Adavis