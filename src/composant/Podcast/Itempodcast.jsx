import React, { useState } from 'react'
import {ChevronDownIcon, XIcon} from '@heroicons/react/solid'
import { catpodcast, podcasts } from '../../data'

function Itempodcast() {
    const [catpodchoix,setcatpodchoix] = useState(1)
    const [liscatart,setliscatart] = useState(false)
  return (
    <div className='py-10 bg-rose-50 flex flex-col items-center'>
        <div className='flex justify-center items-center mt-8 cursor-pointer w-fit' onClick={e => setliscatart(!liscatart)}><h3 className='text-xl font-semibold text-marron-200 2xl:text-4xl'>{catpodcast.filter(cat => cat.id == catpodchoix).map(e => {return e.titre})}</h3> <ChevronDownIcon className='h-5 ml-4 2xl:h-10 text-blue-200' /></div>
        <ul className={`fixed ${liscatart ? 'flex' : 'hidden'} z-50 top-0 left-0 w-full h-screen bg-white opacity-90 flex-col justify-center items-center`} onClick={e => setliscatart(!liscatart)}>
          <div className=' absolute top-4 right-4'><XIcon className=' text-blue-200 h-6 cursor-pointer 2xl:h-10' onClick={e => setliscatart(!liscatart)}/></div>
          {
            catpodcast.map(cat => {
              return <li key={cat.id} className=' cursor-pointer text-2xl 2xl:text-4xl font-semibold mb-6' onClick={e => {setcatpodchoix(cat.id);setliscatart(!liscatart)}}>{cat.titre}</li>
            })
          }
        </ul>
        <div className="grid justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-7 sm:gap-x-12 mt-10">
            {
                podcasts.filter((cat) => cat.idcategorie == catpodchoix).map(pod => {
                    return (
                        <div key={pod.id} className='flex flex-col items-center'>
                            <div className='h-52 w-52 2xl:h-64 2xl:w-64 rounded-lg bg-blue-200 cursor-pointer mb-3'></div>
                            <h3 className='text-center 2xl:text-2xl'>Lorem ipsum dolor sit amet.</h3>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Itempodcast