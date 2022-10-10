import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../api/axios'
import Footer from '../../composant/General/Footer'
import Navbar from '../../composant/General/Navbar'
import Iframcont from '../../composant/Podifram/Iframcont'

function Podifram() {
  const [podcast,setpodcast] = useState({})
  const {id} = useParams()

  useEffect(()=>{
    axios.get(`/podcast/${id}`)
    .then((resp) =>{
      console.log(resp.data)
      setpodcast(resp.data)
    }).catch((errors) =>{
      console.log(errors);
    })

  },[])
  return (
    <div>
        <Navbar />
        <Iframcont podcast={podcast} />
        <Footer />
    </div>
  )
}

export default Podifram