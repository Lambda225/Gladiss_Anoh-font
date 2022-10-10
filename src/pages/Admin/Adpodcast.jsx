import React from 'react'
import { useState } from 'react'
import axios from '../../api/axios'
import GridCatPod from '../../composant/Adaccueil/GridCatPod'
import Adnavbar from '../../composant/General/Adnavbar'
import Adsearchbar from '../../composant/General/Adsearchbar'
import Btnaddcat from '../../composant/General/Btnaddcat'

function Adpodcast() {
  const poscast = "Catégorie Podcast"
  const [dataCatPod,setdataCatPod] = useState([])
  const [compte,setcompte] = useState(1)

  useState(() => {

    axios.get('/catpodcast/create')
    .then((resp) =>{
      setdataCatPod(resp.data)
    }).catch((errors) =>{
      console.log(errors.request.response);
    })

  },[compte])
  return (
    <div className='flex h-screen bg-rose-50'>
        <Adnavbar />
        <div className='w-full lg:w-3/4 overflow-y-scroll'>
          <Adsearchbar />
          <div className='h-full py-10'>
            <div>
              <Btnaddcat categorie={poscast} lien={"/admin/formcatpod"}/> 
            </div>
            <GridCatPod compte={compte} setcompte={setcompte} categorie={poscast} data={dataCatPod} />
            <div className='h-10'></div>
          </div>
        </div>
    </div>
  )
}

export default Adpodcast