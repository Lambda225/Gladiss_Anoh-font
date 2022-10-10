import { ArrowNarrowLeftIcon } from '@heroicons/react/solid'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axios from '../../api/axios'
import GridItemArt from '../../composant/Adlivre/GridItemArt'
import Adnavbar from '../../composant/General/Adnavbar'
import Adsearchbar from '../../composant/General/Adsearchbar'
import Btnaddcat from '../../composant/General/Btnaddcat'

function Aditemart() {

  const {id} = useParams()
  const [articles,setarticles] = useState([])
  const [dataCat,setdataCat] = useState([])
  const [compter,setcompter] = useState(1)

  useEffect(()=>{

    axios.get('/article/create')
    .then((resp)=>{
      setarticles(resp.data.filter(item => item.cat_article_id == id))
      console.log(resp.data);
    }).catch((errors)=>{
      console.log(errors.request.response);
    })

    axios.get(`/cat_article/${id}`)
    .then((resp) =>{
      setdataCat(resp.data)
    }).catch((errors) =>{
      console.log(errors.request.response);
    })

  },[compter])

  return (
    <div>
        <div className='flex'>
            <Adnavbar />
            <div className='w-3/4 h-screen overflow-y-scroll'>
                <Adsearchbar />
                <div className="bg-rose-50">
                    <div className="flex justify-between items-center px-6 py-10">
                      <NavLink to='/admin/article' className='flex'><ArrowNarrowLeftIcon className='h-6 mr-2' /> Catégorie Article</NavLink>
                      <h1 className='text-2xl font-semibold text-marron-200 '>{dataCat.titre}</h1>
                      <Btnaddcat categorie={"Article"} lien={`/admin/formarticle/${id}`} />
                    </div>
                    <GridItemArt compter={compter} setcompter={setcompter} data={articles}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aditemart