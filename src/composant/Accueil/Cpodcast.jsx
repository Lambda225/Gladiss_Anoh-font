import {ArrowNarrowRightIcon} from '@heroicons/react/solid'
import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from '../../api/axios'

function Podcast() {
  const [podcast,setpodcast] = useState([])

  useEffect(()=>{

    axios.get('/podcast/create')
    .then((resp) =>{
      console.log(resp.data)
      setpodcast(resp.data)
    }).catch((errors) =>{
      console.log(errors.request.response);
    })

  },[])
  return (
    <div className='bg-rose-50 py-12 px-12 flex flex-col md:flex-row md:gap-x-8 2xl:justify-between'>
        <div className='md:w-1/2'>
            <h2 className='text-2xl font-semibold mb-4 text-marron-200 2xl:text-4xl'>Podcast</h2>
            <p className='mb-4 2xl:text-2xl'>Les podcast son des fichiers audios éducatif et motivant vous aidant a progesser donc penser a les écouter</p>
            <a href="#" className='flex items-center text-marron-200 2xl:text-2xl'>Acceder aux podcasts <ArrowNarrowRightIcon className='h-4 ml-2 2xl:h-8' /></a>
        </div>
        <div className='flex flex-col items-center gap-4 mt-7 md:w-1/2 md:flex-row md:mt-0 2xl:w-1/4'>
          {
            podcast.splice(0,2).map(pod =>{
              return <div key={pod.id} className='w-3/4 h-44 sm:w-1/2 bg-blue-200 rounded-lg md:h-60 overflow-hidden'> <img src={pod.photo} alt=""  className=' object-cover h-full w-full'/> </div>
            })
          }
        </div>
    </div>
  )
}

export default Podcast