import React from 'react'
import Gritem from '../../composant/Adlivre/Gritem'
import Adnavbar from '../../composant/General/Adnavbar'
import Adsearchbar from '../../composant/General/Adsearchbar'

function Adlistpart() {
    const part = true
  return (
    <div>
        <div className='flex'>
            <Adnavbar />
            <div className='w-3/4 h-screen overflow-y-scroll'>
                <Adsearchbar />
                <div className="bg-rose-50">
                    <div className="flex justify-end pr-6 py-10">
                    </div>
                    <Gritem part={part}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Adlistpart