import React from 'react'
import { users } from '../../data'

function Itemavis({avi}) {
  const use = users.filter(user => user.id === avi.iduser)
  return (
    <div className=' flex flex-col items-center w-10/12 lg:w-7/12'>
        <div className=" h-20 w-20 2xl:h-28 2xl:w-28 rounded-full bg-blue-200 mb-4 "></div>
        <h3 className=' font-semibold mb-4 2xl:text-2xl'>{use[0].nom} {use[0].prenom}</h3>
        <p className='text-center 2xl:text-2xl'>{avi.continue}</p>
    </div>
  )
}

export default Itemavis