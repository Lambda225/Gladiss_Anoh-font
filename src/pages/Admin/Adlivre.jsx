import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from '../../api/axios'
import GridItemLivre from '../../composant/Adlivre/GridItemLivre'
import Adnavbar from '../../composant/General/Adnavbar'
import Adsearchbar from '../../composant/General/Adsearchbar'
import Btnaddcat from '../../composant/General/Btnaddcat'

function Adlivre() {
  const [livres,setlivres] = useState([])
  const [compter,setcompter] = useState([])

  useEffect(()=>{

    axios.get(`/book/create`)
    .then((resp) =>{
      console.log(resp.data);
      setlivres(resp.data)
    }).catch((errors) =>{
      console.log(errors.request.response);
    })

  },[compter])
  return (
    <div>
      <div className='flex'> 
          <Adnavbar />
          <div className=' min-h-screen w-full lg:w-3/4 overflow-y-scroll'>
            <Adsearchbar />
            <div className="bg-rose-50 h-full">
              <div className="flex justify-end pr-6 py-10">
                <Btnaddcat categorie={"Livre"} lien={"/admin/formlivre"}/>
              </div>
              <GridItemLivre compter={compter} setcompter={setcompter} data={livres} />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Adlivre