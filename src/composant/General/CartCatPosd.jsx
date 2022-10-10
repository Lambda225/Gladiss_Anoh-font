import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../api/axios'

function CartCatPosd({data,compte,setcompte}) {

    const [catmenu,setcatmenu] = useState(false)
    const hundleClick = (e) =>{

        axios.delete(`/catpodcast/${data.id}`)
        .then((resp)=>{
            console.log(resp.data);
            setcompte(compte + 1)
            console.log(compte);
        }).catch((errors) =>{
            console.log(errors);
        })

    }

  return (
    <div>
         <div className=' relative shadow-3xl rounded-lg h-80 w-64 p-2 bg-white overflow-hidden'>
        <div className={`absolute duration-300 ${catmenu ? 'top-0' : 'top-[-100%]'} left-0 w-full h-full bg-white flex flex-col justify-center items-center`}>
            <div>
                <ChevronUpIcon className='h-7 cursor-pointer' onClick={e =>{setcatmenu(!catmenu)}}/>
            </div>
            <ul className='text-center'>
                <li className='text-lg my-2 cursor-pointer' onClick={hundleClick}>Supprimer</li>
                <li className='text-lg my-2'>Modifier</li>
                <li className={`text-lg my-2`}> <Link to={`/admin/listpodcast/${data.id}`} >Podcast</Link></li>
            </ul>
        </div>
        <div className='flex justify-end'>
            <ChevronDownIcon className='h-7 cursor-pointer' onClick={e =>{setcatmenu(!catmenu)}}/>
        </div>
        <div className={`h-1/2 w-full bg-blue-200 rounded-lg overflow-hidden flex items-center `}> <img src={data.photo} alt="" className='object-cover w-full h-full' /> </div>
        <div className='mt-2 px-2'>
            <h3 className=' text-lg font-semibold'>{data.titre.substr(0,20)}</h3>
            <p className=''>{data.description.substr(0,80)}</p>
        </div>
    </div>
    </div>
  )
}

export default CartCatPosd