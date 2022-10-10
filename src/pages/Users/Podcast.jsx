import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from '../../api/axios'
import Footer from '../../composant/General/Footer'
import Navbar from '../../composant/General/Navbar'
import Catpodcast from '../../composant/Podcast/Catpodcast'
import Hpadcast from '../../composant/Podcast/Hpadcast'
import Itempodcast from '../../composant/Podcast/Itempodcast'

function Podcast() {
  const [catpodcast,setcatpodcast] = useState([])
  const [podcasts,setpodcasts] = useState([])

  useEffect(()=>{

    axios.get('/catpodcast/create')
    .then((resp) =>{
      setcatpodcast(resp.data)
    }).catch((errors) =>{
      console.log(errors.request.response);
    })

    axios.get('/podcast/create')
    .then((resp) =>{
      setpodcasts(resp.data)
    }).catch((errors) =>{
      console.log(errors.request.response);
    })

  },[])
  return (
    <div>
        <Navbar />
        <Hpadcast />
        <Catpodcast catpodcast={catpodcast} />
        <Itempodcast catpodcast={catpodcast} podcasts={podcasts} />
        <Footer />
    </div>
  )
}

export default Podcast