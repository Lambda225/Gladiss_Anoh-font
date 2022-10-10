import React, { useState } from 'react'
import { users } from '../../data'

function ItemAvis(props) {

    const[visible,setvisible] = useState(props.data.masquer)
    let user = users.filter(use => use.id == props.data.iduser)[0]

  return (
    <div className='flex flex-col md:flex-row items-center justify-center py-4 bg-white gap-x-10 px-7 border-[1px] border-y-gray-500'>
        <p>1</p>
        <div className='my-3 md:my-0 h-24 w-24 rounded-lg bg-blue-200 overflow-hidden'><img src={props.data.photo} alt="img" /></div>
        <div className='w-11/12 text-center md:w-1/5 font-semibold uppercase' >{user.nom} {user.prenom}</div>
        <div className='my-2 md:my-0 w-11/12 text-center md:w-3/12'>{props.data.continue.substr(0,50)}</div>
        <div className={`flex items-center ${props.part ? 'hidden':''}`}>
            <button className={`py-2 px-5 rounded-lg border-[1px] border-gray-500 mr-2 ${props.avis ? 'inline-block' : 'hidden'} ${visible ? 'bg-rose-50 text-marron-200' : 'bg-white text-blue-200'}`} onClick={e =>{setvisible(!visible)}} >{visible ? 'Masquer' : 'Visible'}</button>
            <button className={`py-2 px-5 rounded-lg border-[1px] border-gray-500 mr-2 ${props.avis ? 'hidden' : 'inline-block'}`}>Modifier</button>
            <button className='py-2 px-5 rounded-lg border-[1px] border-gray-500'>Supprimer</button>
        </div>
    </div>
  )
}

export default ItemAvis