import React, { useState } from 'react'
import Champenvoi from '../../composant/Forum/Champenvoi'
import Message from '../../composant/Forum/Message'
import Adnavbar from '../../composant/General/Adnavbar'
import Adsearchbar from '../../composant/General/Adsearchbar'
import { questions } from '../../data'

function Adforum() {
    const admin = true
    const [schear,setschear] = useState('')
  return (
    <div className='flex bg-rose-50 h-screen'>
        <Adnavbar />
        <div className='w-full lg:w-3/4 overflow-y-scroll'>
          <Adsearchbar /> 
          <div className=' bg-rose-50 py-10'>
            <div className=" px-[6%] 2xl:px-[10%] py-12">
            {
            questions.filter(mots => mots.contenu.toLowerCase().includes(schear.toLowerCase()) ).map(question => {
                return <Message question={question} key={question.id} admin={admin} />
              })
            }
              <div className=' h-12'></div>
          </div>
          <Champenvoi schear={schear} setschear={setschear} />
          </div>
        </div>
    </div>
  )
}

export default Adforum