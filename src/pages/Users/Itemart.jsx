import { ArrowRightIcon } from '@heroicons/react/solid'
import React, { useState }  from 'react'
import Carteart from '../../composant/General/Carteart'
import Footer from '../../composant/General/Footer'
import Navbar from '../../composant/General/Navbar'
import Popart from '../../composant/General/Popart'
import Hitemarticle from '../../composant/Itemarticle/Hitemarticle'
import { article } from '../../data'

function Itemart() {
  const [opencatre,setopencatre] = useState(false)
  const [itemart, setitemart] = useState({})
  const [voirplus,setvoirplus] = useState(8)

  return (
    <div>
      <Navbar />
      <Hitemarticle />
      <div className="mt-20 grid justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-[10%] bg-rose-50 py-20">
       {article.slice(0,voirplus).map(art => {
            return <Carteart opencatre={opencatre} article={art} itemart={itemart} setitemart={setitemart} setopencatre={setopencatre} />
          })}
        <div className=' sm:col-span-2 lg:col-span-3 xl:col-span-4 text-center'>
          <a href="" className={`flex items-center 2xl:text-2xl ${article.length < voirplus ? 'hidden':''}`} onClick={e =>  {e.preventDefault();setvoirplus(voirplus + 8)}}>Voir plus <ArrowRightIcon className=' ml-3 h-5 2xl:h-8' /></a>
        </div>
      </div>
      <Popart opencatre = {opencatre} setopencatre={setopencatre} itemart={itemart} setitemart={setitemart}/>
     
      <Footer />
    </div>
  )
}

export default Itemart