import { ArrowNarrowLeftIcon } from '@heroicons/react/solid'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Gritem from '../../composant/Adlivre/Gritem'
import Adnavbar from '../../composant/General/Adnavbar'
import Adsearchbar from '../../composant/General/Adsearchbar'
import Btnaddcat from '../../composant/General/Btnaddcat'

function Adlistpod() {
  return (
    <div>
        <div className='flex'>
            <Adnavbar />
            <div className='w-3/4 h-screen overflow-y-scroll'>
                <Adsearchbar />
                <div className="bg-rose-50">
                    <div className="flex justify-between items-center px-6 py-10">
                      <NavLink to='/admin/podcast' className='flex'><ArrowNarrowLeftIcon className='h-6 mr-2' /> Catégorie Podcast</NavLink>
                      <h1 className='text-2xl font-semibold text-marron-200 '>Titre</h1>
                      <Btnaddcat categorie={"Podcast"} />
                    </div>
                    <Gritem />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Adlistpod