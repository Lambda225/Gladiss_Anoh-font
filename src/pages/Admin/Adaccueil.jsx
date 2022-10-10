import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from '../../api/axios'
import GridCatArt from '../../composant/Adaccueil/GridCatArt'
import GridCatPod from '../../composant/Adaccueil/GridCatPod'
import Stat from '../../composant/Adaccueil/Stat'
import Adnavbar from '../../composant/General/Adnavbar'
import Adsearchbar from '../../composant/General/Adsearchbar'

function Adaccueil() {
  const article = "Article"
  const poscast = "Podcast"
  const [dataCatArt,setdataCatArt] = useState([])
  const [dataCatPod,setdataCatPod] = useState([])
  const [dataArt,setdataArt] = useState([])
  const [dataPod,setdataPod] = useState([])

  useEffect(()=>{

    axios.get('/cat_articles')
    .then((resp) =>{
      setdataCatArt(resp.data)
    }).catch((errors) =>{
      console.log(errors.request.response);
    })

    axios.get('/catpodcast/create')
    .then((resp) =>{
      setdataCatPod(resp.data)
    }).catch((errors) =>{
      console.log(errors.request.response);
    })

    axios.get('/article/create')
      .then((resp) =>{
        setdataArt(resp.data)
      }).catch((errors) =>{
        console.log(errors.request.response);
      })

    axios.get('/podcast/create')
    .then((resp) =>{
      setdataPod(resp.data)
    }).catch((errors) =>{
      console.log(errors.request.response);
    })

  },[])
  
  return (
    <div className='flex h-screen bg-rose-50'>
        <Adnavbar />
        <div className='w-full lg:w-3/4 overflow-y-scroll'>
          <Adsearchbar />
          <div className=' h-full py-10'>
            <Stat articles={dataArt} podcast={dataPod} />
            <GridCatArt categorie={article} data={dataCatArt} />
            <GridCatPod categorie={poscast} data={dataCatPod} />
            <div className='h-10'></div>
          </div>
        </div>
    </div>
  )
}

export default Adaccueil