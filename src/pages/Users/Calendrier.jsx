import React from 'react'
import Contenuecalendrier from '../../composant/Calendrier/Contenuecalendrier'
import Footer from '../../composant/General/Footer'
import Navbar from '../../composant/General/Navbar'

function Calendrier() {
  return (
    <div className='relaive'>
        <Navbar />
        <Contenuecalendrier />
        <Footer />
    </div>
  )
}

export default Calendrier