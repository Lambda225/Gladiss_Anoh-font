import React, { useEffect, useState } from 'react'
import axios from '../../api/axios'
import GridCatArt from '../../composant/Adaccueil/GridCatArt'
import Adnavbar from '../../composant/General/Adnavbar'
import Adsearchbar from '../../composant/General/Adsearchbar'
import Btnaddcat from '../../composant/General/Btnaddcat'

function Adarticle() {
    const article = "Catégorie Article"
    const [dataCatArt,setdataCatArt] = useState([])

    useEffect(()=>{

        axios.get('/cat_articles')
      .then((resp) =>{
        setdataCatArt(resp.data)
      }).catch((errors) =>{
        console.log(errors.request.response);
      })

    },[])
  return (
    <div className='flex bg-rose-50 h-screen'>
        <Adnavbar />
        <div className='w-full lg:w-3/4 min-h-screen overflow-y-scroll'>
          <Adsearchbar />
          <div className='h-full  py-10'>
            <div>
              <Btnaddcat categorie={article} lien={"/admin/formcatart"}/> 
            </div>
            <GridCatArt categorie={article} data={dataCatArt} />
            <div className='h-10'></div>
          </div>
        </div>
    </div>
  )
}

export default Adarticle