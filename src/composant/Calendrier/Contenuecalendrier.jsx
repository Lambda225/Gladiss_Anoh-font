import React, { useEffect, useState } from 'react'
import { CalendarComponent } from '@syncfusion/ej2-react-calendars'
import axios from '../../api/axios'
import { Link } from 'react-router-dom'

function Contenuecalendrier() {
  const [evenement,setevenement] = useState({})

  useEffect((resp)=>{
    axios.get('/event/create')
    .then((resp) =>{
      if(resp.data.length > 0){
        setevenement(resp.data[0])
      }
    }).catch((errors) =>{
      console.log(errors.request.response);
    })
  },[])
  return (
    <div className='py-20 flex justify-center'>
        <div className='flex flex-col items-center rounded-lg shadow-3xl overflow-hidden w-10/12 lg:w-3/4 xl:w-1/2 sm:flex-row 2xl:w-6/12'>
              <div className='bg-rose-50 px-[10%] py-7 sm:px-[6%] w-full lg:w-[45%] '>
                <div className=''>
                  <h2 className="text-2xl text-marron-200 font-semibold pb-2 w-3/4 after:content-[''] after:h-0.5 after:w-full after:bg-marron-200 relative after:absolute after:left-0 after:bottom-0 mb-4 2xl:text-4xl">{evenement.titre}</h2>
                  <p className='2xl:text-2xl'>{evenement.description}</p>
                <div className='flex justify-center mt-4 '><Link to='/connexion' className='px-5 py-3 2xl:px-8 2xl:py-5 rounded-lg bg-marron-200 text-white 2xl:text-2xl'>Acheter accès</Link></div>
              </div>
            </div>
          <div className='w-full lg:w-[55%]'>
                <CalendarComponent className='' />
          </div>
        </div>
    </div>
  )
}

export default Contenuecalendrier