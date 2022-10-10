import React, { useState } from 'react'
import Adnavbar from '../../composant/General/Adnavbar'
import Adsearchbar from '../../composant/General/Adsearchbar'
import GridEvent from '../../composant/Adaccueil/GridEvent'
import Btnaddcat from '../../composant/General/Btnaddcat'
import { useEffect } from 'react'
import axios from '../../api/axios'

function Adevenement() {
  const evenement = true
  const [dataEvent,setdataEvent] = useState([])

  useEffect(()=>{

    axios.get('/event/create')
    .then((resp) =>{
      setdataEvent(resp.data)
    }).catch((errors) =>{
      console.log(errors.request.response);
    })

  },[])
  return (
    <div className='flex h-screen bg-rose-50'>
        <Adnavbar />
        <div className='w-full lg:w-3/4 overflow-y-scroll'>
          <Adsearchbar />
          <div className=" h-full py-10">
            <div className="flex pr-7">
              <Btnaddcat categorie={'Evenement'} lien={"/admin/formevent"}/>
            </div>
            <GridEvent categorie={"Evenement"} data={dataEvent}  />
            <div className="h-10"></div>
          </div>
        </div>
    </div>
  )
}

export default Adevenement