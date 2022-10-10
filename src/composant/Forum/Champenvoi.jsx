import { PaperAirplaneIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import axios from '../../api/axios'

function Champenvoi({schear,setschear,setcompte,compte}) {
  const [contenu,setcontenu] = useState()

  const hundelSubmit = (e) =>{
    e.preventDefault()

    let formData = new FormData();

    formData.append('contenu',contenu)

    axios({
      url:'/question/create',
      method : 'POST',
      headers : {
        "Content-Type": "multipart/form-data",
        authorization: 'your token'
      },
      data : formData
    }).then((resp) =>{
      console.log(resp.data)
      setcompte(compte + 1)
      setcontenu("")
      setschear('')
    }).catch((errors) =>{
      console.log(errors.request.response);
    })
  }

  return (
    <div className=' bg-white w-full py-4'>
        <form action="#" className='flex justify-center' onSubmit={hundelSubmit}>
            <div className='w-3/4 flex justify-center px-4'><textarea name="" id="" cols="2" rows="2" className='py-2 rounded-2xl w-full shadow-3xl px-4 focus:outline-0 resize-none 2xl:py-6 2xl:text-2xl ' value={contenu} onChange={e => {
              setcontenu(e.target.value)
              setschear(e.target.value)
              } }></textarea></div>
            <div className='flex items-center'><button className='h-14 w-14 2xl:h-20 2xl:w-20 rounded-full bg-rose-50 flex justify-center items-center shadow-3xl'><PaperAirplaneIcon className='rotate-90 h-7 2xl:h-12' /></button></div>
        </form>
    </div>
  )
}

export default Champenvoi