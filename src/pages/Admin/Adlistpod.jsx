import { ArrowNarrowLeftIcon } from '@heroicons/react/solid'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Adnavbar from '../../composant/General/Adnavbar'
import Adsearchbar from '../../composant/General/Adsearchbar'
import Btnaddcat from '../../composant/General/Btnaddcat'
import GridItemPod from '../../composant/Adlivre/GridItemPod'
import axios from '../../api/axios'

function Adlistpod() {
  
  const {id} = useParams()
  const [dataPod,setdataPod] = useState([])
  const [dataCat,setdataCat] = useState([])
  const [compter,setcompter] = useState(1)

  useEffect(()=>{

    axios.get('/podcast/create')
    .then((resp) =>{
      setdataPod(resp.data)
    }).catch((errors) =>{
      console.log(errors.request.response);
    })

    axios.get(`/catpodcast/${id}`)
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
                      <NavLink to='/admin/podcast' className='flex'><ArrowNarrowLeftIcon className='h-6 mr-2' /> Catégorie Podcast</NavLink>
                      <h1 className='text-2xl font-semibold text-marron-200 '>{dataCat.titre}</h1>
                      <Btnaddcat categorie={"Podcast"} lien={`/admin/formpodcast/${id}`} />
                    </div>
                    <GridItemPod compter={compter} setcompter={setcompter} data={dataPod.filter(podcast => podcast.cat_podcast_id == id)} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Adlistpod