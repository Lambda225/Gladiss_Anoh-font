import React from 'react'
import Champenvoi from '../../composant/Forum/Champenvoi'
import Message from '../../composant/Forum/Message'
import Stat from '../../composant/Adaccueil/Stat'
import Adnavbar from '../../composant/General/Adnavbar'
import Adsearchbar from '../../composant/General/Adsearchbar'

function Adforum() {
    const admin = true
  return (
    <div className='flex'>
        <Adnavbar />
        <div className='w-3/4 h-screen overflow-y-scroll relative'>
          <Adsearchbar />
          <div className=' bg-rose-50 py-10'>
                <div className=" px-[6%] py-12">
                    <Message admin={admin} />
                    <Message admin={admin}/>
                    <div className=' h-12'></div>
                </div>
                <Champenvoi />
          </div>
        </div>
    </div>
  )
}

export default Adforum