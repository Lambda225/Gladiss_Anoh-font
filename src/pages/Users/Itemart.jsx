import React, { useState }  from 'react'
import Navbar from '../../composant/General/Navbar'
import Hitemarticle from '../../composant/Itemarticle/Hitemarticle'
import Carteart from '../../composant/General/Carteart'
import {ArrowRightIcon} from '@heroicons/react/solid'
import Popart from '../../composant/General/Popart'
import Footer from '../../composant/General/Footer'

function Itemart() {
    const [opencatre,setopencatre] = useState(false)
  return (
    <div>
        <Navbar />
        <Hitemarticle />
        <div className="mt-20 grid justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-[10%] bg-rose-50 py-20">
          <Carteart opencatre = {opencatre} setopencatre={setopencatre}/>
          <Carteart opencatre = {opencatre} setopencatre={setopencatre}/>
          <Carteart opencatre = {opencatre} setopencatre={setopencatre}/>
          <Carteart opencatre = {opencatre} setopencatre={setopencatre}/>
          <Carteart opencatre = {opencatre} setopencatre={setopencatre}/>
          <Carteart opencatre = {opencatre} setopencatre={setopencatre}/>
          <Carteart opencatre = {opencatre} setopencatre={setopencatre}/>
          <Carteart opencatre = {opencatre} setopencatre={setopencatre}/>
          <div className=' sm:col-span-2 lg:col-span-3 xl:col-span-4 text-center'>
              <a href="#" className='flex items-center'>Voir plus <ArrowRightIcon className=' ml-3 h-5' /></a>
          </div>
        </div>
        <Popart opencatre = {opencatre} setopencatre={setopencatre}/>
        <Footer />
    </div>
  )
}

export default Itemart