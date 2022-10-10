import React, { useState } from 'react'
import Avis from '../../composant/Accueil/Avis'
import Evenement from '../../composant/Accueil/Evenement'
import Footer from '../../composant/General/Footer'
import Invitationinscpt from '../../composant/General/Invitationinscpt'
import Clivre from '../../composant/Accueil/Clivre'
import Navbar from '../../composant/General/Navbar'
import Cpodcast from '../../composant/Accueil/Cpodcast'
import Slidearticle from '../../composant/Accueil/Slidearticle'
import { useEffect } from 'react'
import axios from '../../api/axios'


function Accueil(props) {
  const [articles, setarticles] = useState([]);
  const [evenements,setevenements] = useState({})
  const [catarticle, setcatarticle] = useState([])
  // const [livres,setlivres] = useState([])

  useEffect(()=>{

    axios.get(`/book/create`)
    .then((resp) =>{
      console.log(resp.data);
      // setlivres(resp.data)
    }).catch((errors) =>{
      console.log(errors.request.response);
    })

    axios.get('/article/create')
    .then((resp)=>{
      console.log(resp.data);
      setarticles(resp.data);
    }).catch((errors)=>{
      console.log(errors.request.response);
    })

    axios.get('/cat_articles')
    .then((resp) =>{
      setcatarticle(resp.data)
    }).catch((errors) =>{
      console.log(errors.request.response);
    })

    axios.get('/event/create')
    .then((resp) =>{
      if(resp.data.length > 0){
        setevenements(resp.data[0])
      }
    }).catch((errors) =>{
      console.log(errors.request.response);
    })


  },[])

  return (
    <div className='relative'>
        <Navbar />

        <header className='flex flex-col items-center justify-around h-screen bg-rose-50 md:flex-row px-[6%] gap-x-[4%]'>
          <div className='w-10/12'>
            <h1 className='text-2xl 2xl:text-4xl font-semibold mb-8 text-marron-200'>ACCUEIL</h1>
            <p className='2xl:text-2xl'>Nala Coaching est l'espace des africains 3.0 éveilès, responsables et engagés. Nous vous accompagnons dans votre démarche de transformation de soi </p>
          </div>
          <div className='w-10/12 h-72 bg-white rounded-lg overflow-hidden'><img src="./pexels-lan-yao-6714768.jpg" alt="" /></div>
        </header>
        
        <Slidearticle articles={articles}  catarticle={catarticle} />
        <Evenement evenements={evenements} />
        <Clivre />
        <Cpodcast />
        <Avis />
        <Invitationinscpt />
        <Footer />
    </div>
  )
}

Accueil.propTypes = {}

export default Accueil
