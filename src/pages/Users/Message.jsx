import React, { useState } from 'react'
import Footer from '../../composant/General/Footer'
import Itemsnote from '../../composant/General/Itemsnote'
import Navbar from '../../composant/General/Navbar'
import Contenumessage from '../../composant/Message/Contenumessage'

function Message() {
    const [contVisible,setcontVisible] = useState(false)
  return (
    <div className='relative overflow-hidden'>
        <Navbar />
        <header className='h-screen relative'>
            <Itemsnote  contVisible={contVisible} setcontVisible={setcontVisible} />
            <Itemsnote  contVisible={contVisible} setcontVisible={setcontVisible} />
            <Contenumessage contVisible={contVisible} setcontVisible={setcontVisible} />
        </header>
        
        <Footer />
    </div>
  )
}

export default Message