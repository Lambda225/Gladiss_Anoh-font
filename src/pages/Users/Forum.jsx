import React, { useState } from 'react'
import Champenvoi from '../../composant/Forum/Champenvoi'
import Message from '../../composant/Forum/Message'
import Navbar from '../../composant/General/Navbar'
import { questions } from '../../data'

function Forum() {
  const [schear,setschear] = useState('')
  return (
    <div className='relative'>
        <Navbar />
        <div className=" px-[6%] 2xl:px-[10%] py-12">
          {
          questions.filter(mots => mots.contenu.toLowerCase().includes(schear.toLowerCase()) ).map(question => {
              return <Message question={question} key={question.id} />
            })
          }
            <div className=' h-12'></div>
        </div>
        <Champenvoi schear={schear} setschear={setschear} />
    </div>
  )
}

export default Forum