import React from 'react'
import Avis from '../../composant/Accueil/Avis'
import Evenement from '../../composant/Accueil/Evenement'
import Footer from '../../composant/General/Footer'
import Invitationinscpt from '../../composant/General/Invitationinscpt'
import Livre from '../../composant/Accueil/Livre'
import Navbar from '../../composant/General/Navbar'
import Cpodcast from '../../composant/Accueil/Cpodcast'
import Slidearticle from '../../composant/Accueil/Slidearticle'

function Accueil(props) {
  return (
    <div className='relative'>
        <Navbar />

        <header className='flex flex-col items-center justify-around h-screen bg-rose-50 md:flex-row px-[6%] gap-x-[4%]'>
          <div className='w-10/12'>
            <h1 className='text-2xl font-semibold mb-8 text-marron-200'>ACCUEIL</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis officiis dicta enim quisquam illo aperiam commodi excepturi aspernatur modi obcaecati ullam facere, ad velit esse accusamus voluptates autem qui eligendi.</p>
          </div>
          <div className='w-10/12 h-72 bg-white rounded-lg'></div>
        </header>
        
        <Slidearticle />
        <Evenement />
        <Livre />
        <Cpodcast />
        <Avis />
        <Invitationinscpt />
        <Footer />
    </div>
  )
}

Accueil.propTypes = {}

export default Accueil
