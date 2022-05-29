import React from 'react'
import Champenvoi from '../../composant/Forum/Champenvoi'
import Message from '../../composant/Forum/Message'
import Navbar from '../../composant/General/Navbar'

function Forum() {
  return (
    <div className='relative'>
        <Navbar />
        <div className=" px-[6%] py-12">
            <Message />
            <Message />
            <div className=' h-12'></div>
        </div>
        <Champenvoi />
    </div>
  )
}

export default Forum