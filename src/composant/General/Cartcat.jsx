import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'

function Cartcat(props) {
    const [catmenu,setcatmenu] = useState(false)
  return (
    <div className=' relative shadow-3xl rounded-lg h-80 w-64 p-2 bg-white overflow-hidden'>
        <div className={`absolute duration-300 ${catmenu ? 'top-0' : 'top-[-100%]'} left-0 w-full h-full bg-white flex flex-col justify-center items-center`}>
            <div>
                <ChevronUpIcon className='h-7 cursor-pointer' onClick={e =>{setcatmenu(!catmenu)}}/>
            </div>
            <ul className='text-center'>
                <li className='text-lg my-2'>Supprimer</li>
                <li className='text-lg my-2'>Modifier</li>
                <li className={`text-lg my-2 ${!props.evenement ? 'block' : 'hidden'}`}>Article</li>
                <li className={`text-lg my-2 ${!props.evenement ? 'hidden' : 'block'}`}>Participant</li>
            </ul>
        </div>
        <div className='flex justify-end'>
            <ChevronDownIcon className='h-7 cursor-pointer' onClick={e =>{setcatmenu(!catmenu)}}/>
        </div>
        <div className={`h-1/2 gap-2 ${!props.evenement ? 'flex' : 'hidden'}`}>
            <div className='w-1/2 bg-blue-200 rounded-lg'></div>
            <div className='flex flex-col w-1/2 gap-2'>
                <div className='bg-blue-200 h-1/2 rounded-lg'></div>
                <div className='bg-blue-200 h-1/2 rounded-lg'></div>
            </div>
        </div>
        <div className={`h-1/2 w-full bg-blue-200 rounded-lg ${!props.evenement ? 'hidden' : 'block'}`}></div>
        <div className='mt-2 px-2'>
            <h3 className=' text-lg font-semibold'>Titre</h3>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptas!</p>
        </div>
    </div>
  )
}

export default Cartcat