import React, { useState } from 'react'
import Navbar from '../../composant/General/Navbar'
import Headerpost from '../../composant/Article/Headerpost'
import Invitationinscpt from '../../composant/General/Invitationinscpt'
import Carteart from '../../composant/General/Carteart'
import Popart from '../../composant/General/Popart'
import Categorieart from '../../composant/Article/Categorieart'
import {ArrowRightIcon} from '@heroicons/react/solid'
import Footer from '../../composant/General/Footer'

function Article() {
  const [opencatre,setopencatre] = useState(false)
  return (
    <div className=' relative'>
        <Navbar />
        <Headerpost />
        <Invitationinscpt />
        <div className=" grid justify-items-center gap-y-7 gap-x-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-20">
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
        <Categorieart />
        <Footer />
    </div>
  )
}

export default Article