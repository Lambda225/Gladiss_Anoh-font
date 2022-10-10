import React, { useEffect, useState } from 'react'
import axios from '../../api/axios'
import GridItemAvis from '../../composant/Adlivre/GridItemAvis'
import Adnavbar from '../../composant/General/Adnavbar'
import Adsearchbar from '../../composant/General/Adsearchbar'
import { avis } from '../../data'

function Adavis() {
    // const avis = true
    // const [data,setdata] = useState([])

    // useEffect(()=>{

    //   axios('/avis/create')
    //   .then((resp) =>{
    //     setdata(resp.data)
    //   }).catch((errors)=>{
    //     console.log(errors);
    //   })
    // },[])
  return (
    <div className='bg-rose-50 min-h-screen'>
        <div className='flex '>
        <Adnavbar />
        <div className=' z-0 w-full lg:w-3/4'>
          <Adsearchbar />
          <div className="pt-20">
            <GridItemAvis avis={true} data={avis} />
          </div>
        </div>
    </div>
    </div>
  )
}

export default Adavis