import React, { useState } from 'react'
import Navbar from '../../composant/General/Navbar'
import Headerpost from '../../composant/Article/Headerpost'
import Invitationinscpt from '../../composant/General/Invitationinscpt'
import Carteart from '../../composant/General/Carteart' 
import Categorieart from '../../composant/Article/Categorieart'
import {ArrowRightIcon} from '@heroicons/react/solid'
import Footer from '../../composant/General/Footer'
import { article } from '../../data'
import Popart from '../../composant/General/Popart'

function Article() {
  const [opencatre,setopencatre] = useState(false)
  const [itemart, setitemart] = useState({})
  const [voirplus,setvoirplus] = useState(8)

  return (
    <div className=' relative'>
        <Navbar />
        <Headerpost />
        <Invitationinscpt />
        <div className=" grid justify-items-center gap-y-12 gap-x-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-20">
          {article.slice(0,voirplus).map(art => {
            return <Carteart opencatre={opencatre} article={art} itemart={itemart} setitemart={setitemart} setopencatre={setopencatre} />
          })}
          <div className=' sm:col-span-2 lg:col-span-3 xl:col-span-4 text-center'>
              <a href="" className={`flex items-center 2xl:text-2xl ${article.length < voirplus ? 'hidden':''}`} onClick={e =>  {e.preventDefault();setvoirplus(voirplus + 8)}}>Voir plus <ArrowRightIcon className=' ml-3 h-5 2xl:h-8' /></a>
          </div>
        </div>
        <Categorieart />
        <Popart opencatre = {opencatre} setopencatre={setopencatre} itemart={itemart} setitemart={setitemart}/>
        <Footer />
    </div>
  )
}

export default Article