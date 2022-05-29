import React from 'react'
import Footer from '../../composant/General/Footer'
import Navbar from '../../composant/General/Navbar'
import Catpodcast from '../../composant/Podcast/Catpodcast'
import Hpadcast from '../../composant/Podcast/Hpadcast'
import Itempodcast from '../../composant/Podcast/Itempodcast'

function Podcast() {
  return (
    <div>
        <Navbar />
        <Hpadcast />
        <Catpodcast />
        <Itempodcast/>
        <Footer />
    </div>
  )
}

export default Podcast